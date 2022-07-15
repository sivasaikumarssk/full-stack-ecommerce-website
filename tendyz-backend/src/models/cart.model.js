const mongoose = require("mongoose");
const {Schema} = require("mongoose"); 
const cartSchema = new mongoose.Schema(
  {
    id: {type :String, ref:"product"},
   
  },{
    versionKey: false,
  }
);

module.exports = mongoose.model("cart", cartSchema);
