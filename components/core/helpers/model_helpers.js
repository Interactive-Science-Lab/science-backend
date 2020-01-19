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

function find(classDbSettings) {
    const { database, select_fields } = classDbSettings
    return query = db(database)
        .select(select_fields)
}

function findById(id, classDbSettings) {
    const { database, id_field, select_fields, record_fields } = classDbSettings
    return query = db(database)
        .select([...select_fields, ...record_fields])
        .where(id_field, id).first()

}

function tagCloud(classDbSettings) {
    const { database, tag_field} = classDbSettings
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

function add(data, classDbSettings) {
    const { database, id_field, record_callback } = classDbSettings
    return db(database)
        .insert(data)
        .returning(id_field)
        .then(res => {
            return record_callback(res[0])
        })
}

function update(changes, id, classDbSettings) {
    const { database, id_field, record_callback } = classDbSettings
    return db(database)
        .where(id_field, id)
        .update(changes)
        .returning(id_field)
        .then(res => {
            return record_callback(res[0])
        })
}

function remove(id, classDbSettings) {
    const { database, id_field } = classDbSettings
    return db(database)
        .where(id_field, id)
        .del();
}

function listOfNames(classDbSettings) {
    const { database, unique_text, id_field } = classDbSettings
    return db(database)
        .select(unique_text, id_field)
}

function findByName(name, excludingId, classDbSettings) {
    const { database, id_field, unique_text } = classDbSettings
    let query = db(database).where(unique_text, name)
    if (excludingId) { query = query.whereNot(id_field, excludingId) }
    return query.first();
}


