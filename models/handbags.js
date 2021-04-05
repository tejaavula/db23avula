MONGO_CON= 'mongodb+srv://Tejaswi:<password>@cluster0.8oeym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require("mongoose")
const handbagSchema = mongoose.Schema({
Dimensions: String,
Color: String,
Price: Number
})
module.exports = mongoose.model("Handbag", handbagSchema)