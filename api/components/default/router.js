const express = require('express');

const authenticate = require('../core/restricted-middleware.js')
const basicRouter = require('./router_helpers');

//resourceComponent = information about the resource
//siteComponent = information about the site
function defaultRouter(resourceComponent, siteComponent) {
    const router = express.Router();

    const ClassDatabase = require('./model.js')(resourceComponent, siteComponent);

    //Where custom routes come in- either new ones or to override
    resourceComponent.activateRoutes(router, ClassDatabase);

    //BASIC ROUTES
    router.get('/', async (req, res) => {
        
        let results = []
        try { await basicRouter.getAll(req, res, ClassDatabase, resourceComponent, siteComponent) }
        catch { results = new Error("Error gettings items.")}
        return results
    })

    router.post('/', authenticate.user_restricted, async (req, res) => {
        basicRouter.newRecord(req, res, ClassDatabase, resourceComponent)
    });

    router.get('/:id', async (req, res) => {
        basicRouter.getRecord(req, res, ClassDatabase, resourceComponent)
    });

    router.put('/:id', authenticate.user_restricted, async (req, res) => {
        basicRouter.editRecord(req, res, ClassDatabase, resourceComponent)
    });

    router.delete('/:id', authenticate.user_restricted, async (req, res) => {
        basicRouter.deleteRecord(req, res, ClassDatabase, resourceComponent)
    });


    return router
}

module.exports = defaultRouter



// // the /:category 
// router.get('/tag-cloud/:category', async (req, res) => {
//     try {
//       res.json(await ClassDatabase.tagCloud(req.params.category))
//     } catch {
//       res.status(400).json("Unkown errors with item tags.")
//     }
//   })