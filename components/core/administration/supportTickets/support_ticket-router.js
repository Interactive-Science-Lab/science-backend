const express = require('express');
const router = express.Router();

const authenticate = require('../../accounts/restricted-middleware.js')
const basicRouter = require('../../helpers/router_helpers')

const classSettings = {
  formClass: "SupportTickets",
  fileName: 'support_ticket',
  defaultAllSettings: { filter: "pending", kind: "" },
  paginate: true,
}
const ClassDatabase = require(`./${classSettings.fileName}-model.js`);

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