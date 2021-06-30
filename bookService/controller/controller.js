const Boooking = require("../models/bookModel");
const axios = require("axios");
const { Mongoose } = require("mongoose");
const Booking = require("../models/bookModel");
const jwt = require("jsonwebtoken");
var Razorpay = require("razorpay");

let instance = new Razorpay({
  key_id: "rzp_test_PrVR3NZYl3CFS3", // your `KEY_ID`
  key_secret: "9i9RRLJzSHz1JjVFkigpmUGw", // your `KEY_SECRET`
});


module.exports.bookDetails_post = (req, res) => {
  
  axios
    .put(
      "http://localhost:8030/flights/updateFlightSeat/" + req.body.flight_id,
      { numOfticket: req.body.numOfSeats }
    )
    .then((flight) => {
      if (flight.data === "succ") {
        const BookingObj = {
          user_id: req.userId,
          flight_id: req.body.flight_id,
          Departure: new Date(req.body.Departure),
          numOfSeats: req.body.numOfSeats,
        };
        Boooking.create(BookingObj).then((data) => {
          res.status(200).json({ message: "Flight Booked Successfully!" });
        });
      } else {
        res.status(205).json({ message: "Flight Not Booked !" });
      }
    });
};

//booking details

module.exports.viewBook = async (req, res) => {
  const query = { user_id: req.userId };
  const user = await Boooking.findOne(query);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).json({ message: "Empty" });
  }
};

//flight delete
module.exports.deleteBookDetail = (req, res) => {
  try {
    // if(req.userType){
    Boooking.findByIdAndRemove({ _id: req.params.id })
      .then((items) => {
        console.log(items + "is deleted");
        res.status(200).json({ message: "ticket Deleted Successfully!" });
      })
      .catch((err) => {
        res
          .status(201)
          .json({ message: "Inter Error while deleting details " });
      });
    // }
  } catch (err) {
    res.status(400).json({ message: "page not found" });
  }
};
