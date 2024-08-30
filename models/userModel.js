const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
        minLenght:8,
    },
    phone:{
        type:string,
        required:true
    },
    profilePic:{
        type:string,
        default:"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:"course",
    }
});

const User = mongoose.model('User',userSchema);

module.exports = {user};