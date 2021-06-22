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
    classType:[
        
    ],
    Departure:{
        type: Date
    }
})

const flightDetail = mongoose.model('flightdetail' ,flightSchema)

module.exports = flightDetail
