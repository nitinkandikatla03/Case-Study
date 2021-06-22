const Boooking = require('../models/bookModel')
const axios = require('axios')
const { Mongoose } = require('mongoose')
const Booking = require('../models/bookModel')
const jwt = require('jsonwebtoken')




// module.exports.bookDetails_get = (req,res) => {
//     // res.send('booking get')
//     axios.get("http://localhost:8020/cccc@123").then( (data) => {
//         console.log(data.data.password)
//          const user =  {
//             user_id :data.data._id,
//             flight_id :"",
//             timeDate : new Date().now
//          }
        
//         axios.get("http://localhost:8030/Air Aisa`").then ( (data1) => {
//              user.flight_id=data1.data._id
//              res.send(user)
//         })
//     })    
    
// }






// var MongoClient = require('mongodb').MongoClient;

// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
    
//     db.collection('Persons', function (err, collection) {
        
//         collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
//         collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
//         collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

//         db.collection('Persons').count(function (err, count) {
//             if (err) throw err;
            
//             console.log('Total Rows: ' + count);
//         });
//     });
                
// });



// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


module.exports.getBooks = (req,res) => {
    Booking.find({})
    .then( (user) => {
        if(user){
        res.status(200).json({ message: "Flight Booked Successfully!" });
        }
        else{
            res.status(200).json({ message: "Empty" });
        }
    })
    .catch((err) => {
        res.status(401).json({ message: "Email already exist" });
    })
}


module.exports.bookDetails_post =  (req,res) => {
    // axios = get("http://localhost:8020/cccc@123",).then( (data) => {
    //      const user = data
    //     res.send("user")
    // })
    // console.log(req.body);
    // const BookingObj= await new Booking(
    //     {
    //         user_id:req.body.user_id,
    //         flight_id:req.body.flight_id,
    //         journeyDate:req.body.journeyDate
    //     }
    // );
    // BookingObj.save();

    // res.send("succ")

    
        // const token =  req.cookies.jwt
        // if(token){
        //     jwt.verify(token,'nitinS' ,(err,decodedData) => {
        //         if(err){
        //             res.send("error")
        //         }
        //         else{
                    //  res.send('http://localhost:8020/user/'+decodedData.email)
                    // axios = get('http://localhost:8020/user/'+decodedData.email)
                    // .then( (data) => {
                    //     res.send(data)
                    // })
                    // const BookingObj={
                    //         user_id:req.body.user_id,
                    //         flight_id:req.body.flight_id,
                    //         journeyDate:req.body.journeyDate
                    // }
        //             Boooking.create(BookingObj)
        //             .then( (data) => {
        //                 res.status(200).json({ message: "Flight Booked Successfully!" });
        //             })
        //         }
        //     })
        // }
        // else{
        //     res.send("user not valid")
        // }


        const BookingObj={
            user_id: req.userId,
            flight_id:req.body.flight_id,
            Departure:new Date(req.body.Departure)
        }
        console.log(BookingObj);
        Boooking.create(BookingObj)
                    .then( (data) => {
                        res.status(200).json({ message: "Flight Booked Successfully!" });
                    })
                    .catch((err) => {
                        res.status(501).json({ message: "Ineternal service  Error" });
                    })
}


//booking details

module.exports.viewBook = async (req,res) => {
    const query = { user_id : req.userId}
    const user = await Boooking.findOne(query)
    if(user){
        res.status(200).json(user);
    }
    else{
        res.status(200).json({ message: "Empty" });
    }
}


//flight delete 
module.exports.deleteBookDetail = (req,res) => {
    
    try{
        // if(req.userType){
            Boooking.findByIdAndRemove({_id: req.params.id})
            .then( (items) => {
                console.log(items + 'is deleted')
                res.status(200).json({ message: "ticket Deleted Successfully!" });
                
            })
            .catch((err) => {
                res.status(201).json({ message: "Inter Error while deleting details " });
            })
        // }
       
    }
    catch(err){
        res.status(400).json({ message: "page not found" });  
    }
}
