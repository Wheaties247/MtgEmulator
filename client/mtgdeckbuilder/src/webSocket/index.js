var app = require('http').createServer();
const io = module.exports.io = require('socket.io')(app);
const port = 8000;
const SocketManager = require('./SocketManager');





io.on('connect', SocketManager);

server = app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
