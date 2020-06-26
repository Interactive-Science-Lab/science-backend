const paginateHelpers = require('./helpers/paginated_results')
const { log } = require('../asteroid/log-middleware.js')
const Images = require('../core/content/images/image-model.js');
const bcrypt = require('bcryptjs') //hashing the password

module.exports = {
    getAll,
    getRecord,
    newRecord,
    editRecord,
    deleteRecord
}

async function getAll(req, res, ClassDatabase, resourceComponent) {
    let ss = {
        sort: req.query.sort || resourceComponent.loader.sort || "",
        sortdir: req.query.sortdir || resourceComponent.loader.sortdir || "ASC",
        searchTerm: req.query.search || resourceComponent.loader.search || "",
        filter: req.query.filter || resourceComponent.loader.filter || 'all',
        tag: req.query.tag || resourceComponent.loader.tag || "",
        category: req.query.category || resourceComponent.loader.category || "",
        kind: req.query.kind || resourceComponent.loader.kind || ""
    }

    try {
        let returnResults = await ClassDatabase.find(ss)

        if (resourceComponent.hasFeature('paginate')) {
            returnResults = paginateHelpers.results(req, returnResults, resourceComponent)
        }
        return res.json(returnResults);
    } catch {
        res.status(500).json({ message: 'Failed to get items.' });
    }

}

async function getRecord(req, res, ClassDatabase, resourceComponent, respond = true) {
    const { id } = req.params;

    let item = await ClassDatabase.findById(id)
    if (item) {
        if (resourceComponent.has_thumbnail) {
            const thumbnail = await Images.getThumbnail(resourceComponent.formClass, id)
            item = { ...item, thumbnail }
        }
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

    if (resourceComponent.unique_field && await ClassDatabase.findByName(itemData[resourceComponent.unique_text_field])) {
        res.status(400).json({ message: "A record with this name already exists." })
    } else {
        ClassDatabase.add(itemData)
            .then(item => {
                if (resourceComponent.has_log) { log(req, {}, item) }
                res.status(201).json(item);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new item', err: itemData });
            });
    }
}

async function editRecord(req, res, ClassDatabase, resourceComponent) {
    const { id } = req.params;
    const itemData = req.body;

    let pw = resourceComponent.password_field
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