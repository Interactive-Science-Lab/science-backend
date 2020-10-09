const db = require('../../../data/dbConfig.js');
const basicRest = require('./model_helpers')
const {
    joinThumbnail,
    joinUser,
    tagsQuery,
    searchQuery,
    filterQuery,
    sortQuery
} = require('./helpers/search_helpers')

const defaultModel = (resourceComponent, siteComponent) => {

    //FUNCTIONS
    function find(props) {
        const { sort, sortdir, searchTerm, filter, tag, category, kind } = props
        let query = basicRest.find(resourceComponent)

        resourceComponent.fields.list.map(field => {
            if (field.displayType === 'reference') {
                if (field.info.resource && field.info.targetField) {
                    let referenceResource = siteComponent.findResource(field.info.resource)
                    let dbName = referenceResource.databaseName()
                    let foreignId = referenceResource.fields.id
                    try {
                        query = query
                            .leftJoin(dbName, `${resourceComponent.names.lp}.${field.name}`, `${dbName}.${foreignId}`)
                            .select(`${field.info.targetField} as ${referenceResource.names.ls}-${field.info.targetField}`)
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        })

        if(sort && sortdir) {
            query = query.orderBy(sort, sortdir)
        }

        if(searchTerm) {
            query = query.where(resourceComponent.nameField, "ILIKE", `%${searchTerm}%`)
        }

        if(filter) {
            if(filter !== 'all') {
                query = query.where('experiment_class', filter)
            }
        }

        return query
    }

    function findById(id) {
        let query = basicRest.findById(id, resourceComponent)

        if (resourceComponent.hasFeature('creator')) {
            query = joinUser(query, resourceComponent)
        }


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
    function findByFields(value, fields) {
        return basicRest.findByFields(resourceComponent, value, fields)
    }
    function explicitFindByFields(value, fields) {
        return basicRest.explicitFindByFields(resourceComponent, value, fields)
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

    function getUserInfo(user) {
        let id = user.user_id
        let kind = user.user_kind
        return db(`${kind}s`).where('foreign_user_id', id).first()
    }

    let retFunctions = {
        find,
        findById,
        findByName,
        findByFields,
        explicitFindByFields,
        add,
        remove,
        update,
        getGallery,
        getThumbnail,
        getUserInfo,
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
            query = joinUser(query, resourceComponent)
        }

        if (resourceComponent.hasFeature('confirmer')) {
            query = joinUser(query, resourceComponent, 'confirmer')
        }

        if (resourceComponent.hasFeature('tags')) {
            query = tagsQuery(query, resourceComponent.featureOptions('tags').field, tag)
        }







*/
















