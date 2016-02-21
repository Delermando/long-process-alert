var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080;

times = 1;

app.get('/', function(req, res){
 	res.send('Home');
});


app.get('/action', function(req, res){
	times ++;
	res.send('Start Alert');
    io.emit('notification', (times % 2 == 0));
});

app.get('/sound', function(req, res){
  res.sendFile(__dirname + '/app/views/sound.html');
});

io.on('connection', function(socket){
  socket.on('notification', function(msg){
    io.emit('notification', msg);
  });
});

http.listen(port, function(){
  console.log('listening on ' + port);
});
