"use client";
import useGetMessages from "@/app/hooks/useGetMessages.js";
import Message from "./Message.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.js";
import { useEffect, useRef } from "react";
import useListenMessage from "@/app/hooks/useListenMessages.js";

function Messages() {
  const { messages, loading } = useGetMessages();
  // console.log("messages are: ",messages);
  useListenMessage();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <>
      <div className="px-4 flex-1 overflow-auto">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}

        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start the conversation</p>
        )}
      </div>
    </>
  )
}
export default Messages;