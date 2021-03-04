const validator = require('fastest-validator');


const schema = {
    name : {type : "string" , optional : false , max :"100"},
    sem : {type : "number" , optional  : false },
    branch :{type : "string" , optional:false,max:"100"}

}

function validationResult(req,res,next) {
const v = new validator();
result = v.validate(req.body , schema);
if(result != true){
    res.status(400).json({
        message : 'Validation Failed',
        errors  : result
    });
}else{
    next()
}
}
module.exports ={
   validationResult : validationResult
};

