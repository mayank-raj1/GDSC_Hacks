import ChatMessage from "./ChatMessage.jsx";

function ChatModalMessages({ isActive, chat_history }) {
  return (
    <div className={isActive && "w-1/2 h-2/3 bg-white rounded-lg p-8 transition-all duration-700"}>
      {chat_history.map((message, index) => ( // Use map to iterate through messages
        <ChatMessage key={index} message={message} /> // Pass each message to ChatMessage
      ))}
    </div>
  );
}

export default ChatModalMessages;
