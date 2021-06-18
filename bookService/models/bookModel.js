const mongoose = require('mongoose')

//booking schema

const bookingSchema = mongoose.Schema({
    user_id : {
        // type : mongoose.SchemaTypes.ObjectId,
        type:String,
        required : true
    },
    flight_id : {
        // type : mongoose.SchemaTypes.ObjectId,
        type:String,
        required : true
    },
    timeDate : {
        type : Date,
        default:new Date()
    },
    journeyDate:{
        type:Date,
        required:true
    }

})

const Booking = mongoose.model('bookingDetail',bookingSchema)

module.exports = Booking