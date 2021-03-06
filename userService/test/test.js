const chai = require('chai');
const chaiHttp = require('chai-http');
const user = require('../user');
var assert = require("assert");


chai.should(); 
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
    it('it should Not get all data',(done)=>{
        chai.request(user)
        .get('/user/signup')
        .end((err,response)=>{
            response.should.have.status(404);
        done();
        })
    })
})

describe('post /users/addUser',()=>{
    it('it should post data',(done)=>{
        demo = {
            email : "RRR@",
            password : "123456789",
            firstName :  "abc",
            lastName: "pqr"
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
    it('Should NOT POST the user details', (done) => {
        demo = {
                email : "RRR@",
                password : "123456789",
                firstName :  "abc",
                lastName: "pqr"
            }
        chai.request(user)
            .post("/user/signup")
            .send(demo)
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
    })
}) 


describe('post /users/login',()=>{
    it('it should login user',(done)=>{
        demo = {
            email : "RRR@",
            password : "123456789"
        }
        chai.request(user)
        .post('/users/login')
        .send(demo)
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object');
        done();
        })
    })
    it('Should NOT login the user', (done) => {
        demo = {
                email : "RRR@",
                password : "123456789"
            }
        chai.request(user)
            .post("/user/login")
            .send(demo)
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
    })
}) 


