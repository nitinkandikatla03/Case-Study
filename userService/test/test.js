// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const request = require("supertest");
// const expect = chai.expect
// chai.should();
// chai.use(chaiHttp)
// const server = require("../user");
// var app = request.agent(server.app);
// var userModel = require("../models/userModel");
// const { response } = require("express");



const chai = require('chai');
const chaiHttp = require('chai-http');
const user = require('../user');
//const database = require("../routes/dbRoute");
var assert = require("assert");


chai.should(); 
// expect
// assert
chai.use(chaiHttp);


//get user
describe('Get /users',()=>{
    it('it should get all data',(done)=>{
        chai.request(user)
        .get('/users/signup')
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('array');
        done();
        })
    })
})


//get by id
// describe('Get /users',()=>{
//     it('it should get by id',(done)=>{
//         id = '60d05538b20ac32f10dc76a3';
//         chai.request(user)
//         .get('/users/'+id)
//         .end((err,response)=>{
//             response.should.have.status(200);
//             response.body.should.be.a('object');
//         done();
//         })
//     })
// })


//post user 
describe('post /users/signup',()=>{
    it('it should post data',(done)=>{
        demo = {
            email:"shirish@123",
            password:"123456789",
            firstName:"shirish",
            lastName:"gardas"
        }
        chai.request(user)
        .post('/users/signup')
        .send(demo)
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object');
        done();
        })
    })
}) 


//patch
// describe('patch /users/signup',()=>{
//     it('it should put data',(done)=>{
//         user = {
//             name:"vaibhav@123",
//         }
//         id = '60d05538b20ac32f10dc76a3';
//         chai.request(dealer)
//         .put('/users/'+id)
//         .send(user)
//         .end((err,response)=>{
//             response.should.have.status(200);
//             response.body.should.be.a('object');
            
//         done();
//         })
//     })
// }) 

// describe("GET Request", function () {
//     describe("Getting an all the users ",function(){
//     it("A successful get request should return status code equal to 200 and all the users.", (done) => {
//       chai.request(server.app).get("/users/routes").end((err, res)=> {
//           if (err) done(err);
//           expect(res).to.have.status(200);
//           expect(res).to.be.an('object');
//           res.body.should.be.an('array');
//           done();   
//             });
//         });
//         it("Should not return any user.", (done) => {
//             chai.request(server.app).get("/routes/signup").end((err, res)=> {
//                 if (err) done(err);
//                 expect(res).to.have.status(404);
//                 expect(res).to.be.an('object');
//                 done();   
//             });
//         });
//     });
// });


// describe("POST Request.", () => {
//   // describe("Adding a new user into the users collection of the Deals and Coupons Finder's Users Database.",function(){
//       it("Successful insertion should return status code equal to 200.", (done) = {
//         //   let res = await chai
//         // .request(server.app)
//         const user = {
//           email: "mmaa@123",
//           password: "123456789",
//           firstName: "nitin",
//           lastName: "kand"
//         };
//         chai.request(server)
//         .post('/routes/signup')
//         .send(user)
//         .end((err,response))
              
//   })

//   expect(res.status).to.equal(200);
//   res.body.should.be.a('object');
//   res.body.data.should.have.property('_id');
//   res.body.data.should.have.property('full_name').eq("Swaroop Lute Testing...");
//   res.body.data.should.have.property('email_address').eq("swrp123@gmail.com");
//   res.body.data.should.have.property('password').eq("swp123$%");
//   res.body.data.should.have.property('mobile_number').eq(9876756765);
//    });
//    afterEach(async () => {
//     await userModel.deleteOne({full_name: "Swaroop Lute Testing..."})
//     });
//   });
// });