const chai = require('chai');
const chaiHttp = require('chai-http');
const flight = require('../flight');
var assert = require("assert");


chai.should(); 
chai.use(chaiHttp);
before((done) => {
        flight.on('MongoConnected', () => {
                console.log("here");
                done();
        });
});

//get flights
describe('Get /flights',()=>{
    it('it should get all data',(done)=>{
        chai.request(flight)
        .get('/flights/getFlight')
        .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDk4YjVlZTcxZDFlNWNkOGRiM2QyNyIsImVtYWlsIjoic3VuaWxoaXBwQDEyMyIsInVzZXJUeXBlIjp0cnVlLCJpYXQiOjE2MjUwNDk0OTQsImV4cCI6MTYyNTMwODY5NH0.pbbezijmk9aynrm4wNEeTNVV6dpNxU-FmEVp3OktJ10;')
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('array');
        done();
        })
    })
    it('it should not GET all the Flights', (done) => {
            chai.request(flight)
                .get('/flight/getFlight')
                .end((err, res) => {
                    res.should.have.status(404);
                done();
             });
    });
})




// post flight 
describe('post /flights/addFlight',()=>{
    it('it should post data',(done)=>{
        demo = {
            name : "RRR",
            from : "chennai",
            to :  "solapur",
            classType:"",
            Departure:"2021-06-30",
            numOfticket: 200
        }
        chai.request(flight)
        .post('/flights/addFlight')
        .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDk4YjVlZTcxZDFlNWNkOGRiM2QyNyIsImVtYWlsIjoic3VuaWxoaXBwQDEyMyIsInVzZXJUeXBlIjp0cnVlLCJpYXQiOjE2MjUwNDk0OTQsImV4cCI6MTYyNTMwODY5NH0.pbbezijmk9aynrm4wNEeTNVV6dpNxU-FmEVp3OktJ10;')
        .send(demo)
        .end((err,response)=>{
                // console.log(response)
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql("Flight Added Successfully!")
        done();
        })
    })
    it('Should NOT POST the flight details', (done) => {
        user = {
                name:"Wizz Air",
                from:"hydrabad",
                to:"solapur",
                classType:"",
                Departure:"2021-06-25"
            }
        chai.request(flight)
            .post("/flight/addFlight")
            .send(user)
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
    })
}) 


// put flight 
describe('/put/:id book', () => {
    it('it should UPDATE a flight given the id', (done) => {
       const demo = {
            name: "TrueJet"
        }
        id = '60cb3a61f402ad0e2cea42ff';
        chai.request(flight)
        .put('/flights/updateFlight/'+id)
        .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDk4YjVlZTcxZDFlNWNkOGRiM2QyNyIsImVtYWlsIjoic3VuaWxoaXBwQDEyMyIsInVzZXJUeXBlIjp0cnVlLCJpYXQiOjE2MjUwNDk0OTQsImV4cCI6MTYyNTMwODY5NH0.pbbezijmk9aynrm4wNEeTNVV6dpNxU-FmEVp3OktJ10;')
        .send(demo)
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql("Flight updated Successfully!")
            
        done();
        })
    })
    it('it should Not UPDATE a flight given the id', (done) => {
        const demo = {
             name: "Jazz"
         }
         id = '60cb3a61f402ad0e2cea42ff';
         chai.request(flight)
         .put('/flight/updateFlight/'+id)
         .send(demo)
         .end((err,response)=>{
             response.should.have.status(404);
         done();
         })
     })
});

// delete flight 
describe('/DELETE/:id flight', () => {
    it('it should DELETE a flight given the id', (done) => {
            let id = '60dd5791e956566f8cbf66fc';
              chai.request(flight)
              .delete('/flights/deleteFlight/' + id)
              .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDk4YjVlZTcxZDFlNWNkOGRiM2QyNyIsImVtYWlsIjoic3VuaWxoaXBwQDEyMyIsInVzZXJUeXBlIjp0cnVlLCJpYXQiOjE2MjUwNDk0OTQsImV4cCI6MTYyNTMwODY5NH0.pbbezijmk9aynrm4wNEeTNVV6dpNxU-FmEVp3OktJ10;')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql("Flight Deleted Successfully!")
                done();
              });
    });
    it('it should Not DELETE a flight given the id', (done) => {
        let id = '60cb3ac6f402ad0e2cea4305';
          chai.request(flight)
          .delete('/flight/deleteFlight/' + id)
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
    });
});

