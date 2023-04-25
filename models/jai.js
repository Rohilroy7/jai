const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');
const UserSchema= new Schema({
    firstname
    :{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    room:{
        type:String,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },

})
UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('Jai',UserSchema);