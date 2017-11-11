var socket = io();
socket.on('connect', function(){
    console.log('Connected to server');
    socket.on('welcome', function(welcomeMsg){
        console.log(welcomeMsg);
    });
    socket.on('someoneConnected', function(broadcastWelcome){
        console.log(broadcastWelcome);
    });
});

socket.on('newMessage', function(message){    
    console.log('New message', message);
});

socket.on('disconnect', function(){
    console.log('Disconected from server');
});