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
    // console.log(req.userType)
    // console.log(Object.keys(req.userType).length)
    if(req.userType){
        const { name,from,to,classType,Departure } = req.body
        const flight = flightDetail.create({ name,from,to,classType,Departure })
        .then( (flight) => {
            console.log(flight)
            res.status(200).json({ message: "Flight Added Successfully!" });
        })
        .catch((err) => {
            res.status(201).json({ message: "Inter Error while adding details " });
        })
    }
    else{
        res.status(401).json({ message: "Unauthorized client" });  
    }

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
    try{
        if(req.userType){
            flightDetail.findByIdAndRemove({_id: req.params.id})
            .then( (items) => {
                console.log(items + 'is deleted')
                res.status(200).json({ message: "Flight Deleted Successfully!" });
                
            })
            .catch((err) => {
                res.status(201).json({ message: "Inter Error while deleting details " });
            })
        }
       
    }
    catch(err){
        res.status(400).json({ message: "page not found" });  
    }
}


//flight update

module.exports.flightUpdate = (req,res) => {
    if(req.userType){
        flightDetail.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then( () => {
            flightDetail.findOne({_id: req.params.id}).then( (item) => {
                res.status(200).json({ message: "Flight updated Successfully!" });
            })
        })
        .catch((err) => {
            res.status(201).json({ message: "Inter Error while deleting details " });  
        })
    }
  
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
