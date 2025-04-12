import {WebSocketServer, WebSocket} from "ws"


const wss = new WebSocketServer({port : 8000})

let userCount = 0;
let sck:WebSocket[] = [];

wss.on("connection",function(socket){
    // let newSck = [...sck, socket];
    sck.push(socket);
    userCount++;
    console.log("user connected : USER",userCount)
    console.log("Websocket Server Connected");
    socket.send("WebSocket connection established")
    socket.on("message",async (evt)=>{
        // await new Promise((res)=>setTimeout(res,1000));
        sck.forEach(sk=>{
            let data = evt.toString();
            // sk.send(data);
            if(!(sk==socket)){
                sk.send(data);
            }
        })
    })

    // so removing socket connection from broadcast channel array, so websocket server does not send chats to dead connection
    socket.on("disconnect",()=>{
        sck = sck.filter(s => s != socket)
    })
    
})
