const Boooking = require('../models/bookModel')
const axios = require('axios')
const { Mongoose } = require('mongoose')

module.exports.bookDetails_get = (req,res) => {
    // res.send('booking get')
    axios.get("http://localhost:8020/cccc@123").then( (data) => {
        console.log(data.data.password)
         const user =  {
            user_id :data.data._id,
            flight_id :"",
            timeDate : 1999
         }
        
        axios.get("http://localhost:8030/Air Aisa`").then ( (data1) => {
             user.flight_id=data1.data._id
             res.send(user)
        })
    })    
    
}

module.exports.bookDetails_post = (req,res) => {
    // axios = get("http://localhost:8020/cccc@123").then( (data) => {
    //      const user = data
    //     res.send("user")
    // })
    
}