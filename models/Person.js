const mongoose = require('mongoose');

const personSchema = new mongoose.Schema ({
name : {
    type : String ,
    required : true 
},
age : Number ,
email : {
    type : String ,
    required : true ,
    unique: true 
},
food : Array 

})


module.exports = mongoose.model('contact' , personSchema)