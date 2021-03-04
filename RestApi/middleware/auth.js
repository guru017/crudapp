const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){

    try{

        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token , "secret");
        req.userData = decodedToken;
        next();


    }catch(e){
        return res.status(401).json({
            message  : "Authorisation Required!!!"
        })
    }
}


module.exports = {
    checkAuth : checkAuth
}