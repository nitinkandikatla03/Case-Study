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
    
    console.log(req.params.id)
    flightDetail.findById(req.params.id)
    .then( (items) => {
        console.log(items)
    
        res.send(items)
        
    })
}

//flight delete 
  
module.exports.flightDelete = (req,res) => {
    flightDetail.findByIdAndRemove({_id: req.params.id})
    .then( (items) => {
        console.log(items + 'is deleted')
        res.send(items)
    })
}


//flight update

module.exports.flightUpdate = (req,res) => {
    flightDetail.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then( () => {
        flightDetail.findOne({_id: req.params.id}).then( (item) => {
            res.send(item);
        })
    })
    
}

//flight search by from - to
module.exports.flightByLoc = (req,res) => {

    const user=req.params.from
    console.log(req.query)

    flightDetail.find({$and:[{from: req.query.from},{to:req.query.to}]}, function(err, user) 
    {
        if (err)
        {
            res.send(err);
        }
        console.log(user);
        res.json(user);

    });


}
