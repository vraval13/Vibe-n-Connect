import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";
// import notify from "../assets/sounds/msgSound.mp3";
function useListenMessage()
{
  const {socket} = useSocketContext();

  const {messages,setMessages} = useConversation();
  
  useEffect(() => {
    socket?.on("newMessage",(newMessage)=>{
      newMessage.shouldShake = true;

      // const sound = new Audio(notify);
      // sound.play();
      setMessages([...messages,newMessage]);
    })
    
    return () => socket.off("newMessage");
  } , [socket,setMessages,messages]);
}
export default useListenMessage;