const express = require('express');
const router = express.Router();

const ClassDatabase = require('./site_blog-model.js');

const authenticate = require('../../accounts/restricted-middleware.js')
const basicRouter = require('../../helpers/router_helpers')

const classSettings = {
  formClass: "SiteBlog",
  defaultAllSettings: { category: "Blog", sort: "created_at", sortdir: "DESC", filter: "public" },
  paginate: true,

  unique_field: true,
  unique_text_field: "blog_title",

  has_thumbnail: true,
  has_creator: true,
  creator_field: "author_id",
  has_log: true,
}


// the /:category 
router.get('/tag-cloud/:category', async (req, res) => {
  try {
    res.json(await ClassDatabase.tagCloud(req.params.category))
  } catch {
    res.status(400).json("Unkown errors with item tags.")
  }
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



