var express = require('express');
var router = express.Router();
const handbags_controlers= require('../controllers/handbags');

/* GET handbagss */
router.get('/', handbags_controlers.handbags_view_all_Page );
module.exports = router;