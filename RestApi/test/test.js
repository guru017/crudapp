// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");
// var assert  = require('assert');
// var app =  require("../app");
// const { response } = require("express");
// var models  = require('../models');
// const db = require("../models");


// //Assertion Style
// chai.should();
// //chai.assert();
// chai.expect();

// chai.use(chaiHttp);

// describe('Rest API' , ()=>{
   
//     // Testing GET route

//     describe("GET /student ", () => {
//         it("It should GET all the Student lists", (done) => {
//             chai.request(server)
//                 .get("/student")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('array');       
//                 done();
//                 });
//         }); 

//         it("It should NOT GET all the student lists", (done) => {
//             chai.request(server)
//                 .get("/student/api")
//                 .end((err, response) => {
//                     response.should.have.status(404);
//                     response.text.should.be.eq("Can not Get the Students lists");
//                 done();
//                 });
//         });

//     });

//     describe("POST /student", () => {
//         // it("It should POST a new student", (done) => {
//         //     const student = {
//         //         id  : 646,
//         //         name: "Singh123",
//         //         sem  : 5,
//         //         branch: "IEM",
//         //         email : "Rajasingha@gmail.com"
//         //     };
            
//         //     chai.request(server)                
//         //         .post("/student")
//         //         .send(student)
//         //         .end((err,response)=>{
//         //             response.should.have.status(201);
//         //             response.body.should.be.a('object');
//         //             response.text.should.be.eq('Posted New Student Successfully..');
//         //             response.body.student.should.have.properties('id','name','sem','branch','createdAt','updatedAt','deletedAt','email');
                    
//         //         done()
//         //         });
                
//         //});

//         it("It should NOT POST a new Student without Proper validation", (done) => {
//              const student = {
//                 name  : 45
//              };
//             chai.request(server)                
//                 .post("/student")
//                 .send(student)
//                 .end((err, response) => {
//                     response.should.have.status(400);
//                     response.text.should.be.eq("The name should be of String !!!");
//                 done();
//                 });
//         });
//     });



//     describe("PUT /student/:id", () => {
//         it("It should Update an existing Student", (done) => {
//             const id = 502;
//             const student = {
//                 name: "Sahan1",
//                 sem  : 5,
//                 branch : "ISE",
//                 email  : "Chetan@123"
        
//             };
//             chai.request(server)                
//                 .put("/student/" + id)
//                 .send(student)
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('object');
//                     response.body.should.have.property('message').eql("Updated Successfully");
//                     response.body.should.have.property('post').eql({
//                         "name": "Sahan1",
//                         "sem": 5,
//                         "branch": "ISE",
//                         "email": "Chetan@123"
//                     });
                    
//                 done();
//                 });
//         });

//         it("It should NOT Update an existing student without proper validation", (done) => {
//             const id = 502;
//              const student = {
//                  name: 45
                
//              };
//             chai.request(server)                
//                 .put("/student/" + id)
//                 .send(student)
//                 .end((err, response) => {
//                     response.should.have.status(400);
//                     response.text.should.be.eq("The name should be of String!");
//                 done();
//                 });
//         });        
//     });

//     describe("DELETE /student/:id", () => {
//         it("It should DELETE an existing student", (done) => {
//             const id = 1;
//             chai.request(server)                
//                 .delete("/student/" + id)
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                 done();
//                 });
//         });
//     });  



// });
  






















