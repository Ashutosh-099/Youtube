import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomFirstName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomFirstName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="w-1/2 h-[450px] p-4 border border-black bg-slate-100 overflow-auto flex flex-col-reverse">
        {chatMessage.map((message, index) => (
          <ChatMessage
            name={message.name}
            message={message.message}
            key={index}
          />
        ))}
    </section>
  );
};

export default LiveChat;
