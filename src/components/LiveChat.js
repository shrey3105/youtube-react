import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addChat } from "../utils/chatSlice";
import { randomChatNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const chatInterval = setInterval(() => {
      dispatch(
        addChat({
          name: randomChatNames(),
          message: "Live Chat Demo",
        })
      );
    }, 2000);

    return () => {
      clearInterval(chatInterval);
    };
  }, []);

  const chatMessages = [...messages];
  chatMessages.reverse();

  return (
    <div
      className="px-5 py-2 bg-slate-200 w-1/4
    rounded-lg shadow-lg h-[500px] overflow-y-scroll flex flex-col"
    >
      <h3 className="font-bold text-xl">Live Chat</h3>
      <div className="flex flex-col-reverse flex-1">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} message={msg}></ChatMessage>
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: randomChatNames(),
              message: chatText,
            })
          );
          setChatText("");
        }}
      >
        <input
          className="py-2 px-5 rounded-lg"
          type="text"
          value={chatText}
          onChange={(e) => {
            setChatText(e.target.value);
          }}
        ></input>
        <button className="mx-2 text-white bg-red-600 py-2 px-5 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
