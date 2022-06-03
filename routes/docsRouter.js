const express = require('express');
const docsCtrl = require('../controllers/docsCtrl');
const router = express.Router();

// DOCS ROUTES
// localhost3000/docs
router.route('/')
  .get(docsCtrl.all_docs)
  .post(docsCtrl.docs_create_post)

// localhost3000/docs/archive
router.route('/archive')
  .get(docsCtrl.all_docs)

// localhost3000/docs/:_id
router.route('/:_id')
  .get(docsCtrl.docs_detail)
  .put(docsCtrl.docs_update_put)
  .delete(docsCtrl.docs_delete)

module.exports = router;