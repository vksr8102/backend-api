const mongoose = require("mongoose")


const ContactSchema = mongoose.Schema({
    name: {
        type : String,
        required:[true,"Please enter your Name"]
        },
        email:{
            type :String,
            required:[true,"Please enter your email"]
        },
        phone:{
            type :Number,
            required:[true,'please provide a valid number']
            },
         address:{
            type :String,
            default:"Not provided",
            required:true
            },
            message:{
                type :String,
                minlength:[10],
                maxlength :[1256]
            }
         } ,
         {timestamps: true}
        )
      module.exports = new mongoose.model('contact',ContactSchema)