const http = require('http');
const app = require('./app');

const port = 3030;

app.listen(port , () =>console.log("Server is running on port",port));