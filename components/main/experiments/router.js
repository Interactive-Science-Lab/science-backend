const express = require('express');
const router = express.Router();

const ClassDatabase = require('./model.js');

const authenticate = require('../../core/accounts/restricted-middleware.js')
const basicRouter = require('../../core/helpers/router_helpers')

const classSettings = {
  formClass: "Experiments",
  defaultAllSettings: { sort: "experiment_order", sortdir: "ASC" },
  paginate: true,

  unique_field: true,
  unique_text_field: "experiment_name",
}

//BASIC ROUTES
router.get('/', async (req, res) => {
  basicRouter.getAll(req, res, ClassDatabase, classSettings)
})

router.get('/:id', async (req, res) => {
  basicRouter.getRecord(req, res, ClassDatabase, classSettings)
});

router.post('/', authenticate.user_restricted, async (req, res) => {
  basicRouter.newRecord(req, res, ClassDatabase, classSettings)
});

router.put('/:id', authenticate.user_restricted, async (req, res) => {
  basicRouter.editRecord(req, res, ClassDatabase, classSettings)
});

router.delete('/:id', authenticate.user_restricted, async (req, res) => {
  basicRouter.deleteRecord(req, res, ClassDatabase, classSettings)
});

module.exports = router;



