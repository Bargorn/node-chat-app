var socket = io();
socket.on('connect', function(){
    console.log('Connected to server');
    socket.emit('createMessage', {
        to: 'marcelo',
        text: 'yey boiii'
    });
});

socket.on('newMessage', function(message){    
    console.log('New message', message);
});

socket.on('disconnect', function(){
    console.log('Disconected from server');
});