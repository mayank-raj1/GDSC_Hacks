import ChatModalMessages from "./ChatModalMessages";

function ChatModal({ isActive }) {
  return (
    <div
      className={isActive && "fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center bg-opacity-55 z-10 transition-all duration-700"}
    >
      {isActive && <ChatModalMessages />}
    </div>
  );
}

export default ChatModal;
