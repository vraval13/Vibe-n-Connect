"use client";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Import the hook
import { extractTime } from "@/app/utils/extractTime";
import useConversation from "@/app/zustand/useConversation";
import Image from "next/image";

function Message({ message }) {
  const { authUser } = useAuthContext(); // Use the custom hook here
  const { selectedConversation } = useConversation();

  // Check if authUser is available
  if (!authUser) {
    return <div className="chat">Loading...</div>; // or some fallback UI
  }

  const fromMe = message.senderId === authUser._id; // Now safe to access _id
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full overflow-hidden'>
          <Image
            alt='User Profile'
            src={profilePic}
            width={40} // Specify width
            height={40} // Specify height
            onError={(e) => { // Error handling for image loading
              e.target.src = '/default-profile.png'; // Fallback image
            }}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
