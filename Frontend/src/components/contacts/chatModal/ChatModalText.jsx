
function ChatModalText({ isActive }) {

  return (
    <div className="w-full flex justify-center"> 
      <input 
        placeholder="Enter your prompt..."
        className={"rounded-full mb-10 px-4 py-4 w-1/2 transition-all duration-700 mt-10" + (
          isActive ?
          " bg-white border-2 border-black"
          :
          " bg-transparent"
        )}
      />
    </div>
  );
}

export default ChatModalText;
