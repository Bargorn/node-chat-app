const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.on('createMessage', (newMessage)=>{
        newMessage.createdAt = Date.now();
        console.log('New message created', newMessage);
        io.emit('newMessage',{
            from: newMessage.from,
            text: newMessage.text,
            createdAt: Date.now()
        });
    });

    socket.on('disconnect', ()=>{
        console.log('User disconected from server');
    });

    
});


server.listen(port, ()=>{
    console.log(`Server up on ${port}`);
});