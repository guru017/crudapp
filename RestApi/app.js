const express = require('express');
const db = require('./dbconfig');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

const studentRoute = require('./routes/student');

app.use('/student',studentRoute);



module.exports = app;



