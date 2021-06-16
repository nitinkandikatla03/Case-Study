const flightDetail = require('../models/flightModel')


module.exports.flight_get = (req,res) =>{
    res.send("flight details get")
}

module.exports.flight_post = (req,res) => {
    const { name,from,to,classtype,price } = req.body
    const flight = flightDetail.create({ name,from,to,classtype,price })
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