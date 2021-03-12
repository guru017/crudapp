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
router.post("/", checkAuthMiddleware.checkAuth, validMiddleware.validationResult, studentController.save);

//Get all students

router.get('/',checkAuthMiddleware.checkAuth,studentController.showall);


//Update

router.put('/:id', checkAuthMiddleware.checkAuth,validMiddleware.validationResult,studentController.update);

//Delete

router.delete('/:id',checkAuthMiddleware.checkAuth,studentController.deletestudent);

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

module.exports = router;