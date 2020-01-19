const express = require('express');
const router = express.Router();

const ClassDatabase = require('./site_page-model.js');

const authenticate = require('../../accounts/restricted-middleware.js')
const basicRouter = require('../../helpers/router_helpers')

const classSettings = {
  formClass: "SitePage",
  defaultAllSettings: { sort: "page_title", sortdir: "ASC", filter: "public" },
  paginate: true,
  
  unique_field: true,
  unique_text_field: "page_title",

  has_log: true,
}

//Custom route for site_pages
router.get('/menu', (req, res) => {
  ClassDatabase.findMenu()
    .then(items => {
      return res.json(items);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get items' });
    });
})


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
