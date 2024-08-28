import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div className="flex mb-4 items-center">
      <img
        className="w-12"
        src="https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png"
      />
      <div>
        <span className="font-bold px-2">{message.name}</span>
        <span>{message.message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
