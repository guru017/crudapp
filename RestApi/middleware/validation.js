const validator = require('fastest-validator');


const schema = {
    name : {type : "string" , optional : false , max :"100"},
    sem : {type : "number" , optional  : false },
    branch :{type : "string" , optional:false,max:"100"},
    email:{type:"string",optional:false,max:"100",validate:{isEmail:true},unique:{args:true,msg:'Student with this Email already Exists!!'}}

}

errorCount=0;
function validationResult(req,res,next) {
const v = new validator();
result = v.validate(req.body , schema);
if(result != true){
    errorCount++;
    res.status(400).json({
        message : 'Validation Failed',
        errors  : result,
        errorCount:errorCount

    });
}else{
    next()
}
}
module.exports ={
   validationResult : validationResult
};

