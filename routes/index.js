const express = require('express');
const siteRouter = require('./siteRouter')
const docsRouter = require('./docsRouter');
const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/docs', docsRouter);
router.use('/admin', adminRouter);

module.exports = router;