const express = require('express');
const router = express.Router();
const authenticate = require('../restricted-middleware.js')

const userKindsInfo = require('./userKinds/user_kinds-model')
const AuthRouter = require('./auth/auth-router.js');
const AdminRouter = require('./auth/admin-router.js');
router.use('/auth', AuthRouter);
router.use('/admin', AdminRouter);

const basicRouter = require('../../helpers/router_helpers')

const classSettings = {
  formClass: "User",
  fileName: "user",
  defaultAllSettings: { sort: 'username', sortdir: "ASC", },
  paginate: true,

  has_thumbnail: true,
  unique_field: true,
  unique_text_field: "username",

  has_thumbnail: true,
}
const ClassDatabase = require(`./${classSettings.fileName}-model.js`);

//BASIC ROUTES
router.get('/', async (req, res) => {
  basicRouter.getAll(req, res, ClassDatabase, classSettings)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await basicRouter.getRecord(req, res, ClassDatabase, classSettings, false)
  if (user) {
    const UserKindDb = userKindsInfo(user.user_kind)
    const info = await UserKindDb.findByUserId(id)
    delete user.password
    res.json({ ...user, info, })
  }
  else {
    res.status(404).json({ message: 'Could not find item with given id.' })
  }
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


router.get('/dashboard', authenticate.user_restricted, (req, res) => {
  const user = req.decodedToken.user;
  const id = user.user_id

  ClassDatabase.findById(id)
    .then(userProfile => {
      res.json(userProfile)
    });
})
