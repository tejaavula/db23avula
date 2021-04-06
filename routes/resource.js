var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var handbags_controller = require('../controllers/handbags');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/resource/handbags', handbags_controller.handbags_create_post);
// DELETE request to delete Handbag.
router.delete('/resource/handbags/:id', handbags_controller.handbags_delete);
// PUT request to update Handbag.
router.put('/resource/handbags/:id', handbags_controller.handbags_update_put);
// GET request for one Handbag.
router.get('/resource/handbags/:id', handbags_controller.handbags_detail);
// GET request for list of all Handbag.
router.get('/resource/handbags', handbags_controller.handbags_list);
module.exports = router;