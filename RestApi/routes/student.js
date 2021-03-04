const express = require('express');
const { default: validator } = require('validator');
const studentController = require('../controllers/student.controller');
const { validationResult } = require('../middleware/validation');
const router = express.Router();
const validMiddleware = require('../middleware/validation');
const checkAuthMiddleware  = require('../middleware/auth');
const models = require('../models');

//inserting 
router.post("/", checkAuthMiddleware.checkAuth, validMiddleware.validationResult, studentController.save);

//GetbyId
router.get("/:id", checkAuthMiddleware.checkAuth,studentController.showById);

//Get all students

router.get('/', checkAuthMiddleware.checkAuth,studentController.showall);


//Update

router.put('/:id', checkAuthMiddleware.checkAuth,validMiddleware.validationResult,studentController.update);

//Delete

router.delete('/:id',checkAuthMiddleware.checkAuth,studentController.deletestudent);

//signup
router.post('/signup',studentController.signup);

//login

router.post('/login',studentController.login);


//router.get('/pagination',studentController.page);

module.exports = router;

