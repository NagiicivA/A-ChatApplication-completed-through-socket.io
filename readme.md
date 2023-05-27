readme.md

1. The overall design of the website
    The whole website contains five parts:
        1. Introduction.html
        2. About.html
        3. ChatApplication.html
        4. CSSstylesheet.css
        5. Node.js
    For the layout of a navigation bar that jumps between three pages, I finally decided to make it a vertical navigation bar and anchor it to the far left of the page, because I think this layout of the navigation bar is more in line with the user's first feeling, so that they can see the location of the navigation bar immediately when they want to go to other pages after reading one page. In addition, I chose centered layout for the overall layout of each page, because I think the advantage of centered display is intuitive and concise, and users can see the information you provide directly.

2. The challenges faced during the development of the website  
    The most diffuclt things in this assessment are absouletey the development of the ChatApplication.html and Node.js. To make users chat with each other in the ChatApplication.html,I found in Week 9's lecture. We can use socket.io in the html and js files to make users communicate with other in real time. 
    However, It takes me a long time to discover the use of socket.io, I even use chatGPT to help me explain some knowledge I did not understand. For example, in the Assignment, it requires me to tell other users that somebody is typing when a user is typing. At first I completely do not know how to deal with it. But thanks to gpt, gradually I know that it just like a type of .addEventListener.

3. How does the chat application client communicate with the server
    According to the lecture, first, we have to import the socket.io in our Assignment's folder, use the command 'npm install socket.io' to install. Second, we need to create an io server in our javascript file, just like 'io.on('connection', (socket) => {....});'. Third, we go to the html file and create 'var socket = io();' in 'script'. After this, we can finally make the client communicate withe the server. 

4. How to handle events and use web sockets.
    As the lecture shows, you need to create a new add.EvenListener, it depends on what kind of listener you prepare to use. For example, in my ChatApplication.html, I want user send their message by click the send button, so I first create a button use to send: '<input type="submit" id="sendbtn" name="sendbtn" value="send">'. Then, I need to use this button in script, so I write the code: 'var sendbtn = document.getElementById('sendbtn'); sendbtn.addEventListener('click', (msg) => {...});'. Besides, in my Node.js, we also need to receive these request: 'socket.on('chatmessage', (msg) => {...});'. This code help receive the request from the client, deal with the data and send it back to client. The client also need to receive that data with: 'socket.on('chatmessage', (msg) => {...});'. So this is the whole process about how to handle an event and use web sockets.

5. References to the sources.
    https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML【MDN Web Docs】Element.innerHTML
    http://www.justinaguilar.com/animations/
    https://socket.io/
    https://github.com/socketio/chat-example
