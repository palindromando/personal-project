const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/')
  .get(adminCtrl.admin)

router.route('/submission')
  .get(adminCtrl.submission)

router.route('/:_id/edit-docs')
  .get(adminCtrl.docs_update_get)

module.exports = router;