const express = require('express');

const {genrateNewShortURL,getAnalytics,} = require('../controllers/url');
const { handleError } = require('parse/lib/browser/RESTController');
const router = express.Router();

router.post('/',genrateNewShortURL);

router.get("/analytics/:shortid",getAnalytics);


module.exports = router;