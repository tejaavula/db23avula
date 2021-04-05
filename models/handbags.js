const mongoose = require("mongoose")
const handbagSchema = mongoose.Schema({
Dimensions: String,
Color: String,
Price: Number
})
module.exports = mongoose.model("Handbags", handbagSchema)