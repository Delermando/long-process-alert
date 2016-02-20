var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080;


app.get('/', function(req, res){
 	res.send('Home');
 	res.end('')
 	res.writeHead(200)
});


app.get('/action', function(req, res){
  res.sendFile(__dirname + '/app/views/action.html');
});


app.get('/sound', function(req, res){
  res.sendFile(__dirname + '/app/views/sound.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(port, function(){
  console.log('listening on ' + port);
});
