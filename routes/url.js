const express = require('express');

const {genrateNewShortURL,getAnalytics,} = require('../controllers/url');
const router = express.Router();

router.post('/',genrateNewShortURL);

router.get("/analytics/:shortid",getAnalytics);


module.exports = router;