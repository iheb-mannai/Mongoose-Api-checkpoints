const mongoose = require('mongoose')




const connectDB = () => {
mongoose.connect('mongodb://127.0.0.1:27017/iheb' , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then (()=> console.log('connected to database succesfully'))
.catch ((err)=> console.log('connection to database failed' , err))


}



module.exports = connectDB