/**
 * 
 */

var vertx = require('vertx');
var console = require('vertx/console');

// create server
var server = vertx.createNetServer();

var eb = vertx.eventBus;

server.connectHandler(function(sock) {
    
	console.log("A client has connected!");
	
	sock.write("welcome")

	eb.registerHandler('test.address',   function(message) {
	  	console.log('I received a message ' + message);
		sock.write(message)
	});


	sock.dataHandler(function(message) {
		eb.publish("test.address", message);
		
	});

});


// start server
server.listen(1234, 'localhost');
