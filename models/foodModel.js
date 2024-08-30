const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
   title:{
    type:String,
    required:true,
    unique:true
   },
   image:{
    type:string,
    default:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
   },
   description:{
    type:string,
    minLength:50,
    maxLenght:500
   }
});

const Food = mongoose.model('Food',foodSchema);

module.exports = {Food};