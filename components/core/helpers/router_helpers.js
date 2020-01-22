const paginateHelpers = require('./paginated_results')
const { log } = require('../administration/userLogs/log-middleware.js')
const Images = require('../content/images/image-model.js');

module.exports = {
    getAll,
    getRecord,
    newRecord,
    editRecord,
    deleteRecord
}

async function getAll(req, res, ClassDatabase, classSettings) {
    let ss = {
        sort: req.query.sort || classSettings.defaultAllSettings.sort || "",
        sortdir: req.query.sortdir || classSettings.defaultAllSettings.sortdir || "ASC",
        searchTerm: req.query.search || classSettings.defaultAllSettings.search || "",
        filter: req.query.filter || classSettings.defaultAllSettings.filter || 'all',
        tag: req.query.tag || classSettings.defaultAllSettings.tag || "",
        category: req.query.category || classSettings.defaultAllSettings.category || "",
        kind: req.query.kind || classSettings.defaultAllSettings.kind || ""
    }

    try {
        
        let returnResults = await ClassDatabase.find(ss) 
        if(classSettings.paginate) { 
            returnResults = paginateHelpers.results(req, returnResults, classSettings) 
        }
        return res.json(returnResults);
    } catch {
        res.status(500).json({message: 'Failed to get items.' });
    }

}

async function getRecord(req, res, ClassDatabase, classSettings, respond = true) {
    const { id } = req.params;

    let item = await ClassDatabase.findById(id)
    if (item) {
        if(classSettings.has_thumbnail) { 
            const thumbnail = await Images.getThumbnail(classSettings.formClass, id) 
            item = {...item, thumbnail}
        }
        if(respond) { res.json(item) } else { return item }
    } else {
        if(respond) {  
            res.status(404).json({ message: 'Could not find item with given id.' })
        } else { return false }
    }
}

async function newRecord(req, res, ClassDatabase, classSettings) {
    const itemData = req.body;
    if(classSettings.has_creator) { itemData[classSettings[creator_field]] = req.decodedToken.user.user_id }

    if (classSettings.unique_field && await ClassDatabase.findByName(itemData[classSettings.unique_text_field])) {
        res.status(400).json({ message: "A record with this name already exists." })
    } else {
        ClassDatabase.add(itemData)
            .then(item => {
                if(classSettings.has_log) { log(req, {}, item) }
                res.status(201).json(item);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new item', err: itemData });
            });
    }
}

async function editRecord(req, res, ClassDatabase, classSettings) {
    const { id } = req.params;
    const itemData = req.body;

    const item = await ClassDatabase.findById(id)
    if (classSettings.unique_field && await ClassDatabase.findByName(itemData[classSettings.unique_text_field], id)) {
        res.status(400).json({ message: "A record with this name already exists." })
    } else {
        ClassDatabase.update(itemData, id)
            .then(updatedItem => {
                if(classSettings.has_log) { log(req, item) }
                res.json(updatedItem);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to update item' });
            });
    }
}

async function deleteRecord(req, res, ClassDatabase, classSettings) {
    const { id } = req.params;

    const item = await ClassDatabase.findById(id)

    ClassDatabase.remove(id)
        .then(deleted => {
            if(classSettings.has_log) { log(req, item) }
            res.send("Success.")
        })
        .catch(err => { res.status(500).json({ message: 'Failed to delete item' }) });
}