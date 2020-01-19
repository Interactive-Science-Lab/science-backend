const express = require('express');
const router = express.Router();

const authenticate = require('../../accounts/restricted-middleware.js')
const basicRouter = require('../../helpers/router_helpers')

const classSettings = {
  formClass: "Feedback",
  tableName: 'feedback',
  defaultAllSettings: { filter: "unlogged", kind: "" },
  paginate: true,
}
const ClassDatabase = require(`./${classSettings.tableName}-model.js`);

//CUSTOM ROUTES
router.put('/confirm/:id', authenticate.admin_restricted, (req, res) => {
  const { id } = req.params;

  ClassDatabase.update({logged: true}, id)
  .then(updatedFeedback => {
    res.json(updatedFeedback);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update feedback' });
  });

});
//---------------

//BASIC ROUTES
router.get('/', async (req, res) => {
  basicRouter.getAll(req, res, ClassDatabase, classSettings)
})
 
router.get('/:id', async (req, res) => {
  basicRouter.getRecord(req, res, ClassDatabase, classSettings)
});

router.post('/', async (req, res) => {
  basicRouter.newRecord(req, res, ClassDatabase, classSettings)
});

router.put('/:id', authenticate.user_restricted, async (req, res) => {
  basicRouter.editRecord(req, res, ClassDatabase, classSettings)
});

router.delete('/:id', authenticate.user_restricted, async (req, res) => {
  basicRouter.deleteRecord(req, res, ClassDatabase, classSettings)
});

module.exports = router;


