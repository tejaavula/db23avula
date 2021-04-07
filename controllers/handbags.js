var Handbags = require('../models/handbags')
// List of all Handbags
exports.handbags_list = async function (req, res) {
    // List of all Handbags
    res.send('NOT IMPLEMENTED: Handbags list');
};
exports.handbags_list = async function(req, res) {
    try{
    theHandbags = await Handbags.find();
    res.send(theHandbags);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific Handbag.
exports.handbags_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag detail: ' + req.params.id);
};
// Handle Handbag create on POST.
exports.handbags_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Handbags();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimension":"small", "Color":"Red", "Price":1000}
    document.Dimensions = req.body.Dimensions;
    document.Color = req.body.Color;
    document.Price = req.body.Price;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    };
// Handle Handbags delete form on DELETE.
exports.handbags_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag delete DELETE ' + req.params.id);
};
// Handle Handbags update form on PUT.
exports.handbags_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbags update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.handbags_view_all_Page = async function(req, res) {
    try{
    theHandbags = await Handbags.find();
    res.render('handbags', { title: 'Handbag Search Results', results: theHandbags });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
