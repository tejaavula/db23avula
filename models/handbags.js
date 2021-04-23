const mongoose = require("mongoose")
const handbagSchema = mongoose.Schema({
    Dimensions: {
        type: String,
        required: [true, "Dimensions are required"]
    },
    Color: {
        type: String,
        minLength:[5,"Color should be of minimum 7 charachters "],
        required: [true, "Color is Required"]
    },
     Price: {
        type: Number,
        required: [true,"Price of the Handbag is required"],
        min:[3000,"Price Should be minimum of 3000$ "],
        max:[6000,"Price Cannot be greater than 6000$ "]


    }

})

module.exports = mongoose.model("Handbags", handbagSchema)