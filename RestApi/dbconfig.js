const mysql = require("mysql")

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'Student',
    multipleStatements : true
});

db.connect((err) => {
    console.log(err);
if(!err)
console.log("Database connection is Successfull!!");
else
console.log("Database connection failed \n Error:" +JSON.stringify(err,undefined,2));

});
