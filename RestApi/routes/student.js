const express = require('express');
const { default: validator } = require('validator');
const studentController = require('../controllers/student.controller');
const { validationResult } = require('../middleware/validation');
const router = express.Router();
const validMiddleware = require('../middleware/validation');
const checkAuthMiddleware  = require('../middleware/auth');
const models = require('../models');
const { required } = require('joi');
const request = require('request');



//inserting 
router.post("/", validMiddleware.validationResult, studentController.save);

//Get all students

router.get('/',studentController.showall);


//Update

router.put('/:id', validMiddleware.validationResult,studentController.update);

//Delete

router.delete('/:id',studentController.deletestudent);

//signup
router.post('/signup',studentController.signup);

//login

router.post('/login',studentController.login);

//Pagination Api
router.get('/pagination',checkAuthMiddleware.checkAuth,studentController.page);

//Bulk insert Api
router.post('/bulkInsert',studentController.bulkinsertion);

// Calling to External Api
router.get('/externalApi',studentController.callExternalApiUsingRequest)

//Bulk Update Api
router.patch('/bulkupdate',studentController.bulkupdate);

module.exports = router;