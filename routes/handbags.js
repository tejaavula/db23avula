var express = require('express');
var router = express.Router();
const handbags_controlers= require('../controllers/handbags');

/* GET handbagss */
router.get('/', handbags_controlers.handbags_view_all_Page );
module.exports = router;

/* GET detail handbags page */
router.get('/detail', handbags_controlers.handbags_view_one_Page);

/* GET create handbags page */
router.get('/create', handbags_controlers.handbags_create_Page);
