
const bcrypt = require('bcryptjs') //hashing the password
const paginateHelpers = require('./helpers/paginated_results')
const { log } = require('../core/log-middleware.js')


module.exports = {
    getAll,
    getRecord,
    newRecord,
    editRecord,
    deleteRecord
}



async function getAll(req, res, ClassDatabase, resourceComponent) {
    let searchQuery = defaultSearchQuery(resourceComponent, req)

    try {
        //Runs the search query based on input.
        let returnResults = await ClassDatabase.find(searchQuery)

        //Looks to see if the Resource has any features that need called & combined with the results
        returnResults = await resourceComponent.handleIndexFeatures(returnResults)

        //If there's a paginate, take care of that here.
        if (resourceComponent.hasOption('paginate')) {
            returnResults = paginateHelpers.results(req, returnResults, resourceComponent)
        }

        //And return the results.
        return res.json(returnResults);

    } catch (err) {
        res.status(500).json({ err, message: 'Failed to get items.' });
    }

}

//Takes in a "respond" boolean that defaults to true- this controls whether or not it sends the response.
async function getRecord(req, res, ClassDatabase, resourceComponent, respond = true) {
    const { id } = req.params;

    let item = await ClassDatabase.findById(id)
    if (item) {

        item = await resourceComponent.handleViewFeatures(item)


        if (respond) { res.json(item) } else { return item }
    } else {
        if (respond) {
            res.status(404).json({ message: 'Could not find item with given id.' })
        } else { return false }
    }
}

async function newRecord(req, res, ClassDatabase, resourceComponent) {
    const itemData = req.body;
    if (resourceComponent.has_creator) { itemData[resourceComponent.creator_field] = req.decodedToken.user.user_id }

    let pw = resourceComponent.fields.password
    if (pw) {
        if (itemData[pw] && itemData[pw] != "") {
            itemData[pw] = bcrypt.hashSync(itemData[pw], 10)
        } else {
            delete itemData[pw]
        }
    }

    if (resourceComponent.unique_field && await ClassDatabase.findByName(itemData[resourceComponent.unique_text_field])) {
        res.status(400).json({ message: "A record with this name already exists." })
    } else {
        console.log(itemData)
        ClassDatabase.add(itemData)
            .then(item => {
                console.log(item)
                if (resourceComponent.has_log) { log(req, {}, item) }
                res.status(201).json(item);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new item', err });
            });
    }
}

async function editRecord(req, res, ClassDatabase, resourceComponent) {
    const { id } = req.params;
    const itemData = req.body;

    console.log(resourceComponent)

    
    let pw = resourceComponent.options.password_field
    if (pw) {
        if (itemData[pw] && itemData[pw] != "") {
            itemData[pw] = bcrypt.hashSync(itemData[pw], 10)
        } else {
            delete changes.password
        }
    }

    const item = await ClassDatabase.findById(id)
    if (resourceComponent.unique_field && await ClassDatabase.findByName(itemData[resourceComponent.unique_text_field], id)) {
        res.status(400).json({ message: "A record with this name already exists." })
    } else {
        ClassDatabase.update(itemData, id)
            .then(updatedItem => {
                if (resourceComponent.has_log) { log(req, item) }
                res.json(updatedItem);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to update item' });
            });
    }
    
}

async function deleteRecord(req, res, ClassDatabase, resourceComponent) {
    const { id } = req.params;

    const item = await ClassDatabase.findById(id)

    ClassDatabase.remove(id)
        .then(deleted => {
            if (resourceComponent.has_log) { log(req, item) }
            res.send("Success.")
        })
        .catch(err => { res.status(500).json({ message: 'Failed to delete item' }) });
}


defaultSearchQuery = (resourceComponent, req) => {
    return {
        sort: req.query.sort || resourceComponent.loader.sort || "",
        sortdir: req.query.sortdir || resourceComponent.loader.sortdir || "ASC",
        searchTerm: req.query.search || resourceComponent.loader.search || "",
        filter: req.query.filter || resourceComponent.loader.filter || 'all',
        tag: req.query.tag || resourceComponent.loader.tag || "",
        category: req.query.category || resourceComponent.loader.category || "",
        kind: req.query.kind || resourceComponent.loader.kind || ""
    }
}