Those who know : 
1. broadcasting
2. rooms in websockets 


Do : Scaling of WebSocket Server and connecting to pubSub. sp, now clients / browsers are connecting to any websocket seerver, but the message gets transmitted to all clients in that same room

Creating : 

STEP 1 : Simple Broadcasting Chat App            : ✅
STEP 2 : -> Adding rooms to this Chat App        : 
         -> Create Website for this
STEP 3 : Scaling it via pubsubs


HOW TO INSTALL PUBSUB : use Reddis 


MOVING TO STEP 2 : Adding rooms to the websocket server ![rooms](image.png)
-> Now if you go to the lecture of metaverse you will see in the notion docs for its imolementation, there we have webSocket schema of where client and server messages are documented. So as what can be sent from client side and what websocket can respond back with ![webSocket Schema for MetaVerse](image-1.png)

![example - one of data object that client can send to the websockset, now Websockets donot accept JSON objects but we can easily convert JSON to strings  ](image-2.png)

Similarly we will create schema for websocket in here chat application

For Our Application Schema should be :-

WHAT USER CAN SEND :-

  -> __Join a room__
  // type means what I want to do
  // payload means what all things you need to do for that task you specified in type

     {
        "type" : "join",  
        "payload" : {            
            "roomId" : "123",
            "user" : "Aayushi",
            "userID" : "AJ190"
            "userAvatar" : "www.google.com"
        }
     }

  -> __Send a Message__
    
     {
        "type" : "chat",
        "payload" : {
            "message" : "Hi There" 
            "roomId" : "123"
        }
     }


WHAT SERVER CAN SEND :-
   -> __Message__

      {
        "type" : "chat",
        "payload" : {
            "message" : "Hi There"
        }
      }



PROBLEMS IN THIS CHAT APP
1. Does not notify your online and offline status correctly : HARDCODED
2. User Profiles should be mentioned in chat room [their profile photo]
3. Adding Signin and Signup pages 
4. Once I refresh the page I get ejected out of chatRoom
5. chatRoom chatBox is collapsed make its default height to 70% of main height
6. Write more strickt logic
7. Learn node::streams