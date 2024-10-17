"use client";
import useConversation from "@/app/zustand/useConversation.js";
import MessageInput from "./MessageInput.js";
import Messages from "./Messages.js";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Import to access authUser

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null); // To clean previous messages
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col" style={{
      borderRadius:"10px",
      backgroundColor:"black"
    }}>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          {/* Upper part To: */}
          <div className="bg-slate-500 px-4 py-2 mb-2" style={{
            borderRadius:"10px"
          }}>
            <span className="label-text">
              To:
            </span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Messages Part: */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
export default MessageContainer;

// No chat selected case
const NoChatSelected = () => {
  const { authUser } = useAuthContext(); // Get authUser from context

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        {/* Welcome message */}
        <p>Welcome 👋 {authUser?.fullName || "Guest"}</p> {/* Display fullName */}
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
