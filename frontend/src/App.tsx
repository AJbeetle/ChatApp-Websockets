import { useState, useEffect, useRef} from "react"
// import ChatBoxComponent from "./components/chatBox"; 
import { BsChat } from "react-icons/bs";
import ChatBoxComponent from "./components/chatBox";
import {nanoid} from "nanoid"

function App() {

  const [room, setRoom] = useState(false);
  const [roomId, setRoomId] = useState("");
  const inpRef = useRef<HTMLInputElement>(null);
  const user = "aauishi";
  const userId = "XYZ123";
  const userAvatar = "haha";

  function joinRoom(){
    let id = inpRef.current?.value as string;   
    setRoom(true);
    setRoomId(id);
  }

  function createRoom(){
    const id = nanoid(5);
    setRoom(true);
    setRoomId(id);

  }

  return (
    <div className="flex justify-start bg-slate-200 items-center flex-col gap-8 min-h-screen h-full p-5 border-4 border-solid border-black">

      {
        !room && <>
        <div className="flex flex-col">
          <div className="font-bold text-6xl">ChatRoom</div>
          <div className="font-semibold text-xs">Welcome to Real Time Communication with GROUPS!!</div>
        </div>
        <div className="bg-blue-200 w-[50%] h-fit flex gap-2 flex-col p-10 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <div className="flex items-center font-extrabold text-2xl leading-[0.5] gap-2">
              <BsChat />
              <p> Real Time Chat</p>
            </div>
            <p className="text-xs font-medium">temporary room that expires after both users exit</p>
          </div>
          <button className=" bg-black rounded-lg  text-white active:scale-95 py-1 " onClick={createRoom}>Create New Room</button>
          <div className="flex w-full justify-center gap-2">
            <input ref={inpRef} type="text" className="outline-none w-full px-2 py-1 rounded-lg bg-blue-100" placeholder="Enter Room Code"></input>
            <button className="bg-black text-white px-2 py-1 rounded-lg w-[20%] active:scale-95" onClick={joinRoom}>Join Room</button>
          </div>
  
        </div>
        </>
      }

      {room && <ChatBoxComponent setRoom={setRoom} roomId={roomId} user={user} userId={userId} userAvatar={userAvatar} ></ChatBoxComponent>}
      
    </div>

  )
}

export default App

