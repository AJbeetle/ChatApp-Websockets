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
        // sck.forEach(e=>{
        //     e.send(evt+"ws is sending");
        // })
        if(evt.toString()=== "ping"){
            await new Promise((res)=>setTimeout(res,1000));
            // socket.send("pong")
            sck.forEach(sk=>{
                console.log(sk)
                sk.send("pong")
            })
        }
        else{
            await new Promise((res)=>setTimeout(res,1000));
            sck.forEach(sk=>{
                let data = evt.toString();
                // sk.send(data);
                if(!(sk==socket)){
                    sk.send(data);
                }
            })
        }
    })
    
})
