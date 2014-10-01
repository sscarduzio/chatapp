/**
 * 
 */

var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
	req.response.sendFile('./web/index.html'); // Always serve the index page
}).listen(8080, 'localhost');