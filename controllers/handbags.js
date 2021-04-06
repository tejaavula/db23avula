var Handbags = require('../models/handbags')
// List of all Handbags
exports.handbags_list = async function (req, res) {
  res.send('NOT IMPLEMENTED: Handbags list');
};
// for a specific Handbag.
exports.handbags_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag detail: ' + req.params.id);
};
// Handle Handbag create on POST.
exports.handbags_create_post = async function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag create POST');
};
// Handle Handbags delete form on DELETE.
exports.handbags_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag delete DELETE ' + req.params.id);
};
// Handle Handbags update form on PUT.
exports.handbags_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbags update PUT' + req.params.id);
};

