const cool = require('cool-ascii-faces');
const http = require('http');
const app = require('./app');

var PORT = process.env.PORT || 3030;

app.listen(PORT , () =>console.log("Server is running on port",PORT));

