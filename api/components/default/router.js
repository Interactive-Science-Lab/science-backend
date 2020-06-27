const express = require('express');

const authenticate = require('../core/restricted-middleware.js')
const basicRouter = require('./router_helpers')


function defaultRouter (resourceComponent) {
    const router = express.Router();
    
    const ClassDatabase = require('./model.js')(resourceComponent);

    //BASIC ROUTES
    resourceComponent.activateRoutes(router, ClassDatabase);

    router.get('/', async (req, res) => {
        basicRouter.getAll(req, res, ClassDatabase, resourceComponent)
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