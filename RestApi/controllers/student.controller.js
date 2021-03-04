const { error } = require('console');
const models = require('../models');
const db  = require('../dbconfig');
const validator = require('fastest-validator');
const jwt = require('jsonwebtoken');
const bcryptjs  = require('bcryptjs');
const { sign } = require('crypto');
const { off } = require('../app');


function save(req,res){
    const student = {

        name : req.body.name,
        sem: req.body.sem,
        branch: req.body.branch
    }

    
models.Student.create(student).then(result =>{
    res.status(201).json({
        message : "Success",
        post :result
    });


}).catch(error =>{
    res.status(500).json({
        message : "Something went wrong",
        error : error
    });

});


}


function showById(req,res){
    const id = req.params.id;
    models.Student.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Not Found the student"
            })
        }
       

    }).catch(error=>{
        res.status(500).json("Something went wrong")

    });
    
}

function showall(req,res){
    models.Student.findAll().then(result=>{
        res.status(200).json(result);

    }).catch(error=>{
        res.status(500).json("Something went wrong")
    });
}



function update(req,res){
    const id  = req.params.id;
    const updatedstudent = {
        name : req.body.name,
        sem: req.body.sem,
        branch : req.body.branch
    }

    
    

    models.Student.update(updatedstudent , {where : {id:id}}).then(result=>{

        res.status(200).json({
            message  : "Updated Successfully",
           // post : result  //Get boolean result so do like 
            post : updatedstudent   
        });

    }).catch(error =>{
        res.status(500).json({
            message : "Something went wrong",
            error  : error
        });
    });
}

function deletestudent (req,res){
    const id = req.params.id;

    models.Student.destroy({where : {id:id }}).then(result=>{

        res.status(200).json({
            message  : "Deleted Successfully",
              
        });

    }).catch(error =>{
        res.status(500).json({
            message : "Something went wrong",
            error  : error
        });
    });


}

function signup(req,res){


    models.User.findOne({where : {email : req.body.email}}).then(result =>{
        if(result){
            res.status(409).json({
            message : "Email already exists!"
    });
    }else{

        bcryptjs.genSalt(10,function(err,salt){
            bcryptjs.hash(req.body.password , salt , function(err,hash){

                const user = {
                
                    email  : req.body.email,
                    password  : hash
            
                }
            
                models.User.create(user).then(result =>{
                    res.status(201).json({
                        message : "Student registered Successfully!!",
                
                    });
                
                
                }).catch(error =>{
                    res.status(500).json({
                        message : "Something went wrong",
                    });
                
                });
            });
        });

    }
}).catch(error=>{
    res.status(500).json({
        message : "Something went wrong"
    });
});    

}

function login(req,res){

    models.User.findOne({where : {email:req.body.email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message  : " invalid Email!!"
            });
        }else{
            bcryptjs.compare(req.body.password , user.password , function(err , result){
                if(result){
                    var token = jwt.sign({
                        email : user.email
                    } , "secret", function(err,token){
                        res.status(200).json({
                            message : "Logged In Successfully!!",
                            token  : token
                        });
                    });

                }else{
                    res.status(401).json({
                        message  : "Invalid  Password!!"
                    });
                }

            });

        }

    }).catch(error =>{
        res.status(401).json({
            message  : "Something went wrong!"
        });
    });
        
}


module.exports = {
    save:save,
    showById:showById,
    showall : showall,
    update:update,
    deletestudent:deletestudent,
    signup:signup,
    login:login
}