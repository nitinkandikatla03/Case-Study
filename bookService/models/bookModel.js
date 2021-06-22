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
    booked_time : {
        type : Date,
        default : Date.now()
        
    },
    Departure:{
        type:Date,
        required:true
    }

})

const Booking = mongoose.model('bookingDetail',bookingSchema)

module.exports = Booking