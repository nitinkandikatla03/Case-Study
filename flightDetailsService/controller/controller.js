const flightDetail = require('../models/flightModel')

//get all flight details
module.exports.flight_get = (req,res) =>{
    flightDetail.find({})
    .then ( (data) => {
        res.send(data)
    })
}

//add flight details
module.exports.flight_post = (req,res) => {
    const { name,from,to,classType } = req.body
    const flight = flightDetail.create({ name,from,to,classType })
    .then( (flight) => {
        console.log(flight)
        res.send(flight)
    })

}


//flight by name

module.exports.flightByName = async (req,res) => {
        const query = { name : req.params.name}
        const user = await flightDetail.findOne(query)
        console.log(user.name)
        res.json (user)
        // res.send("succ");
    
}

//flight by id

module.exports.flightById = (req,res) => {
    const query = {
        id : req.params.id
    }
    const flight = flightDetail.flightById()
    .then( (data) => {
        console.log(data)
        res.send(data)
    })
}


