const mongoose = require('mongoose')

//booking schema

const bookingSchema = mongoose.Schema({
    user_id : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    flight_id : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    timeDate : {
        type : Date,
        required : true
    }

})

const Booking = mongoose.model('bookingDetail',bookingSchema)

module.exports = Booking