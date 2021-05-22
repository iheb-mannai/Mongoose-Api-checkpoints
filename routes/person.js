const express = require('express');
const router = express.Router();
const contact = require('../models/Person');







// Use --- POST --- To add a person

router.post('/', (req, res) => {

const {name,age,email,food} = req.body

if (!name) { res.send('name is required')} 
if (!email) {res.send('email is required')}

const newPerson = new contact ({name,age,email,food})


newPerson.save()
.then (()=> res.send({msg : 'person added' , newPerson}))
.catch ((err) => res.send({msg : 'server error'} , err))
})





// use ---- GET --- to get all person list


router.get('/', (req, res) => {


    contact.find({})
    .then((contact) => res.send({msg : "all contacts" , contact}))
    .catch((err)=> res.send({msg: 'server error' , err})) 


})

 // findById
  
contact.findById('60a7daef00c88e1a04dcc4c0', (err , data) => {
    err ? console.log('error : ' , err) : console.log({msg :'contact you want is ' , data})
//findOne
contact.findOne({name : "iheb"} , (err , data) => {
    err ? console.log('you have an error : ', err ) : console.log({msg :'the result of FindOne search is :' , data})
})
})







// find and update (classic way)



contact.findById('60a7daef00c88e1a04dcc4c0', (err , person) => {
    err ? console.log('error : ' , err) : person.food.push("hamburger") ;
    person.save((err, data) => {
        err ? console.log('you have an error: ' ,err) : data;
    })
     





})



//findOne and update 


contact.findOneAndUpdate({name : 'iheb'} ,{age: 20}, {new: true}, (err, data) => {
    err ? console.log('there is an error', err) : data
})



 // remove all document with name mary
 contact.remove({name : 'mary'} , (err, data) => {
     err ? console.log('the is an error so we cant remove'): console.log(data)
 })



 // Chain Search Query Helpers to Narrow Search Results
contact.find({food : {$all :['chappati']}})
.sort('name')
.limit(2)
.select('-age')
.exec((err, data) =>{
    err ? console.log('error :' , err) : console.log({msg: 'persons who like pizza are' ,data})
} )


module.exports = router 
