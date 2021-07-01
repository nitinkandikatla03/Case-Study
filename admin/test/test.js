const chai = require('chai');
const chaiHttp = require('chai-http');
const admin = require('../admin');
var assert = require("assert");


chai.should(); 
chai.use(chaiHttp);


//post signup
describe('post /admins/addAdmin',()=>{
    it('it should post data',(done)=>{
        demo = {
            email : "RRR@",
            password : "123456789",
            firstName :  "abc",
            lastName: "pqr"
        }
        chai.request(admin)
        .post('/admins/signup')
        .send(demo)
        .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object');
        done();
        })
    })
    it('Should NOT POST the admin details', (done) => {
        demo = {
                email : "RRR@",
                password : "123456789",
                firstName :  "abc",
                lastName: "pqr"
            }
        chai.request(admin)
            .post("/admin/signup")
            .send(demo)
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
    })
}) 



//post login
describe('post /admins/login',()=>{
    it('it should login admin',(done)=>{
        demo = {
            email : "RRR@",
            password : "123456789"
        }
        chai.request(admin)
        .post('/admins/login')
        .send(demo)
        .end((err,response)=>{
            response.should.have.status(200);
            // response.body.should.be.a('object');
        done();
        })
    })
    it('Should NOT login the admin', (done) => {
        demo = {
                email : "RRR@",
                password : "123456789"
            }
        chai.request(admin)
            .post("/admin/login")
            .send(demo)
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
    })
}) 
