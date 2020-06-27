const db = require('../../../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    listOfNames,
    findByName,
    tagCloud,
    returnTags,
    findById,
    find
}

function find(resourceComponent) {
    const database = resourceComponent.names.lp
    const indexFields = resourceComponent.fields.index
    const idField = resourceComponent.fields.id
    resourceComponent.fields.unique ? indexFields.push(resourceComponent.fields.unique) : null
    resourceComponent.hasFeature('tags') ? indexFields.push(resourceComponent.featureOptions('tags').field) : null

    return query = db(database)
        .select([ idField, ...indexFields ])
}

function findById(id, resourceComponent) {
    const database = resourceComponent.names.lp
    const indexFields = resourceComponent.fields.index
    const idField = resourceComponent.fields.id
    const recordFields = resourceComponent.fields.record
    resourceComponent.fields.unique ? indexFields.push(resourceComponent.fields.unique) : null
    resourceComponent.hasFeature('tags') ? indexFields.push(resourceComponent.featureOptions('tags').field) : null
    return query = db(database)
        .select([idField, ...indexFields, ...recordFields])
        .where(idField, id).first()

}

function tagCloud(resourceComponent) {
    const { database, tag_field} = resourceComponent
    return db(database)
        .pluck(tag_field)
}

function returnTags(tags) {
    let cloudObj = {}, cloudArr = []
    //Map over the the array of arrays into an object with the hash being the tag name and the value being the count
    tags.map(tagArray => tagArray.map(tagItem => cloudObj[tagItem] >= 0 ? cloudObj[tagItem] += 1 : cloudObj[tagItem] = 1))
    //Map that back into an array for sorting
    Object.entries(cloudObj).map(arr => cloudArr.push(arr))
    cloudArr = cloudArr.sort((a, b) => b[1] - a[1])
    return cloudArr
}

function add(data, resourceComponent, record_callback) {
    const database = resourceComponent.names.lp
    const idField = resourceComponent.fields.id
    return db(database)
        .insert(data)
        .returning(idField)
        .then(res => {
            return record_callback(res[0], resourceComponent)
        })
}

function update(changes, id, resourceComponent, record_callback) {
    const database = resourceComponent.names.lp
    const idField = resourceComponent.fields.id
    return db(database)
        .where(idField, id)
        .update(changes)
        .returning(idField)
        .then(res => {
            return record_callback(res[0], resourceComponent)
        })
}

function remove(id, resourceComponent) {
    const database = resourceComponent.names.lp
    const idField = resourceComponent.fields.id
    return db(database)
        .where(idField, id)
        .del();
}

function listOfNames(resourceComponent) {
    const database = resourceComponent.names.lp
    const idField = resourceComponent.fields.id
    const uniqueField = resourceComponent.fields.unique

    return db(database)
        .select(uniqueField, idField)
}

function findByName(name, excludingId, resourceComponent) {
    const database = resourceComponent.names.lp
    const idField = resourceComponent.fields.id
    const uniqueField = resourceComponent.fields.unique

    let query = db(database).where(uniqueField, name)
    if (excludingId) { query = query.whereNot(idField, excludingId) }
    return query.first();
}


