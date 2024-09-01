const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
  },
   image:{
    type: String,
    default:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
   },
   description:{
    type: String,
    minLength:50,
    maxLenght:500
   }
});

const Food = mongoose.model("Food",foodSchema);

module.exports = {Food};