const mongoose = require('mongoose')

//flight schema

const flightSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    from : {
        type : String,
    },
    to : {
        type : String
    },
    classType : {
        type : String
    },
    price : {
        type : Number
    }
})

const flightDetail = mongoose.model('flightDetail' ,flightSchema)

module.exports = flightDetail
