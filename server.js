const express = require('express');
const app = express();

//var cfenv = require("cfenv");
//var appEnv = cfenv.getAppEnv();

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.info("Listening on port: " + port);
	console.log(process.versions);
});

app.get('/', function (req, res) {
	res.type("text/html").status(200).send('<html><head></head><body><h1>Welcome to my first CF Node App !</h1><br />Node.js versions :<br /><pre>'+JSON.stringify(process.versions, undefined, 2)+'</pre><a href="/Get">Do a Get Call</a></body></html>');
});

app.get('/Get', function (req, res) {
	res.type("text/html").status(200).send('<html><head></head><body><h1>Get OK !</h1><br /><a href="/">Back</a></body></html>');
});