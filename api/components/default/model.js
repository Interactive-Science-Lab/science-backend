const db = require('../../data/dbConfig.js');
const basicRest = require('./model_helpers')
const {
    joinThumbnail,
    joinUser,
    tagsQuery,
    searchQuery,
    filterQuery,
    sortQuery
} = require('./helpers/search_helpers')

const defaultModel = (resourceComponent) => {

    //FUNCTIONS
    function find(props) {
        const { sort, sortdir, searchTerm, filter, tag } = props
        let query = basicRest.find(resourceComponent)

        if (resourceComponent.hasFeature('search')) {
            query = searchQuery(query, resourceComponent.featureOptions('search'), searchTerm)
        }

        if (resourceComponent.hasFeature('filter')) {
            query = filterQuery(query, resourceComponent.featureOptions('filter'), filter)
        }

        if (resourceComponent.hasFeature('sort')) {
            query = sortQuery(query, sort, sortdir)
        }

        if (resourceComponent.hasFeature('thumbnail')) {
            query = joinThumbnail(query, `${resourceComponent.names.lp}.${resourceComponent.fields.id}`, resourceComponent.names.us)
        }

        if (resourceComponent.hasFeature('creator')) {
            query = joinUser(query, resourceComponent )
        }

        if (resourceComponent.hasFeature('tags')) {
            query = tagsQuery(query, resourceComponent.hasFeature('tags').field, tag)
        }

        return query
    }

    function findById(id) {
        let query = basicRest.findById(id, resourceComponent)
        return query
    }
    function findByName(name, excludingId = null) {
        return basicRest.findByName(name, excludingId, resourceComponent)
    }
    function add(data) {
        return basicRest.add(data, resourceComponent, findById)
    }
    function update(changes, id) {
        return basicRest.update(changes, id, resourceComponent, findById)
    }
    function remove(id) {
        return basicRest.remove(id, resourceComponent)
    }


    function getGallery(id) {
        return db('images')
        .where("foreign_id", id)
        .where("foreign_class", resourceComponent.names.us)
        .where("image_kind", "gallery")
    }

    function getThumbnail(id) {
        return db('images')
        .where("foreign_id", id)
        .where("foreign_class", resourceComponent.names.us)
        .where("image_kind", "thumbnail").first()
    }


    let retFunctions = {
        find,
        findById,
        findByName,
        add,
        remove,
        update,
        getGallery,
        getThumbnail,
        ...resourceComponent.modelFunctions
    }

    //AVAILABLE CALLS
    return retFunctions

}

module.exports = defaultModel



/*



async function tagCloud(category) {
  const tags = await basicRest.tagCloud(classDbSettings)
    .where('blog_category', category)
    .andWhere('blog_status', 'public')
  return basicRest.returnTags(tags)
}



*/
















