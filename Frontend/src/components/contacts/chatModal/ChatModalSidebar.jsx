
function ChatModalSidebar({ isActive, data }) {

  return (
    <div className={isActive && "w-full m-8 h-1/3 bg-white rounded-lg p-8 transition-all duration-700"}>
      <h3 className="text-2xl m-2">{data.title}</h3>
      <p className="text-lg ml-2"><em>{data.text}</em></p>

    </div>
  );
}

export default ChatModalSidebar;
