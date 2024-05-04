
function Message({ message }) {
  const { sender, text, timestamp } = message;
  console.log(sender === "You")
  return (
    <div className={ 
      (sender === "You") ? (
        "m-1 w-full flex justify-end" 
      ) : (
        "m-1 w-full flex" 
      )
    }
    >
      <div className={
        (sender === "You") ? (
          "bg-cyan-200 max-w-2/3 rounded-lg p-3 max-w-96"
        ) : (
          "bg-indigo-300 max-w-2/3 rounded-lg p-3 max-w-96"
        )
        
    
      }>
        <p className="font-semibold mb-1">{sender}</p>
        <p className="text-sm">{text}</p>
        <time>{timestamp}</time>
      </div>
    </div>
  );
}

export default Message;
