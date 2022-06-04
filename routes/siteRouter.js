const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

router.route('/about')
  .get(siteCtrl.about);

  router.route('/thankyou')
  .get(siteCtrl.thankyou);

router.route('/map')
  .get(siteCtrl.map)
  .post(siteCtrl.map)

router.route('/submission')
  .get(siteCtrl.submission)
//   .post(siteCtrl.submission_post)

router.route('/register')
  .get(siteCtrl.register_get)
  .post(siteCtrl.register_post)

router.route('/login')
  .get(siteCtrl.login_get)
  .post(siteCtrl.login_post)

router.route('/logout')
  .get(siteCtrl.logout)

router.route('/auth/google')
  .get(siteCtrl.google_get)

router.route('/auth/google/admin')
  .get(siteCtrl.google_redirect_get)

module.exports = router;