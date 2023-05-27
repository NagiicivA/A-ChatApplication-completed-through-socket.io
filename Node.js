const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const port = 8080;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/Introduction.html');
}); 

var users = {}; // create an array to store users

io.on('connection', (socket) => {
    
    console.log('A user connected');
    // when a user enter, store its input name or id into the users array
    socket.on('username',(username) => {
        socket.username = username;
        users[socket.id] = username;
        // put the user's name into user-list and show it in HTML
        io.emit('user-list', Object.values(users));
        io.emit('message','user '+ `${socket.username}` + ' connected!');
    })

    socket.on('chatmessage', (msg) => {
        console.log(`[${socket.username}]: ${msg}`);
        io.emit('chatmessage', `[${socket.username}]: ${msg}`);
    });
    //when someone is typing, send the message to HTML
    socket.on('typing', () => {
        socket.broadcast.emit('typing', 'Someone is typing...');
    });

    socket.on('disconnect', () => {
        console.log('user '+ `${socket.username}` + ' disconnected');
        io.emit('message','user '+ `${socket.username}` + ' disconnected!');
        delete users[socket.id];
        io.emit('user-list',Object.values(users));
    });
});


http.listen(port, () => {
    console.log('listening on port 8080');
});


