const mongoose = require("mongoose")


const ContactSchema = mongoose.Schema({
fields: [
  {
    // Each field in the form can have a name, type, label, etc.
    question: {
      type: String,
    },
    type: {
      type: String,
    },
    category:{
      type :String
    },
    label: {
      type: String,
    },
    options:{
        type:Array,
    },
    underlineWords:{
        type:Array
    }
    // You can add more properties for each field depending on your requirements
  },
],
// You can add more properties to the form editor schema as needed
created_at: {
  type: Date,
  default: Date.now,
},
}
        )
 module.exports = new mongoose.model('contact',ContactSchema)