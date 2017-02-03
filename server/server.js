
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/www'));



//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
    next();
});

io.set('origins', '*:*');

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('msg', function (data, callback){
		console.log("msg");
		io.sockets.emit('newmsg', data); //aqí envia la data
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
