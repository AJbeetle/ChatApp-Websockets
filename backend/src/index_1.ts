console.log("hi");

// diff libraries for implementing HTTP Server : Express, hone, kow and many more 

// one of libraries for implementing websocket server : ws

// you can create websocket server in three ways : 
/* 
    1. Using http library
    2. Using Express library
    3. Purely Websockets onlt
*/

// We are implementing method 3, read through other two in notes

import { WebSocketServer } from "ws";

//event handler
const wss = new WebSocketServer({port : 8000});

wss.on("connection", function(socket){
    // so whenever websocket connection is made give me socket of that person, socket : a place where I can send and recieve messgaes to and fro
    console.log("User Conncted")
    socket.send("Hi There")
    setInterval(function(){
        socket.send("Current Price of SOLANA is : "+Math.random());
    },1000);

    // when client side sends message from its socket on this open WebSocket connection
    socket.on("message",(e)=>{
        console.log(e.toString());
    })
    //An Example of when Client might need to send message to the websocket server is : In BACKPACK APP when you are dashboard you send connection socket to webSocket server that I subscribe to SOLANA price and when you go to some another page on app, you send another message to webSocket server that I unsubscribe from SOLANA Price now, so don't send me any more values
})


// The above is the most basic implementation of websocket server, now create client to talk to webserver : going with postman right now