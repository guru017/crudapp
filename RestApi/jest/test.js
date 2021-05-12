var request = require('supertest');
var server = require('../server');
var app = require('../app');
var models = require('../models');
const { JsonWebTokenError } = require('jsonwebtoken');


 beforeEach(async()=>{
    let data = {
        name : "Sarang",
        sem  : 6,
        branch:"ISE",
        email : "Sarang@123.com"
        }
    await models.Student.create(data);
});
afterEach(async()=>{
    await models.Student.destroy({where:{}});
})

describe('Rest Api' , ()=>{

    //Testing GET Route..

    describe('GET Route',()=>{

        test("It should return list of all Students" , async()=>{
            const res = await request(server)
            .get('/student');
            expect(res.statusCode).toEqual(200);
            expect(res.body).not.toBeNull();

        });

        test("It should NOT return list of all students"  ,async()=>{
            const res  = await request(server)
            .get('/student/api');
            expect(res.statusCode).toEqual(404);


        })

    });

    describe('GET BY ID ROUTE' , ()=>{

        test("It Should Return by ID" , async()=>{
            const id = 7;
            const res  = await request(server)
            .get('/student'+id)
            expect(200)
            expect(res.body).not.toBeNull()

        });
        test("It Should NOT Return by ID" , async()=>{
            const id = 5;
            const res  = await request(server)
            .get('/'+id)
            expect(404)
            expect(res.body).not.toBeNull()

        });
    });
    
    describe('Delete ROUTE' , ()=>{

        test("It Should Delete by ID" , async()=>{
            const id = 7;
            const res  = await request(server)
            .delete('/student'+id)
            expect(200)

        });
        test("It Should NOT Delete by ID" , async()=>{
            const id = 27;
            const res  = await request(server)
            .delete('/'+id)
            expect(404)
        

        });
    });

    describe('POST ROUTE' , ()=>{
        let data = {
            name : "Srujan",
            sem  : 5,
            branch:"CSE",
            email : "Srujan@123.com"

        }
        test("It Should Post new one" , async()=>{
            const res  = await request(server)
            .post('/student/')
            .send(data)
            .expect(201)

        });
        test("It Should NOT Post new one" , async()=>{
            let data = {
            name : "Srujan",
            sem  : 5,
            branch:"CSE",
            email : "Srujan@123.com"
            }
            const res  = await request(server)
            .post('/student/api')
            .send(data)
            .expect(404)
        

        });
    });

    describe('PUT ROUTE' , ()=>{
        let ID  = 7;
        let data = {
            name : "Srujan_Update",
            sem  : 5,
            branch:"CSE",
            email : "Srujan@123.com"
            

        }
        test("It Should update existing one" , async()=>{
            const res  = await request(server)
            .put('/student'+ID)
            .send(data)
            .expect(404)

        });

        test("It Should NOT update existing one" , async()=>{
            let ID  = 7;
        let data = {
            name : "Srujan_Update",
            sem  : 5,
            branch:"CSE",
            email : "Srujan@123.com"  
        }
            const res  = await request(server)
            .put('/student/update/api')
            .send(data)
            .expect(404)
        
        });    
    });
});

