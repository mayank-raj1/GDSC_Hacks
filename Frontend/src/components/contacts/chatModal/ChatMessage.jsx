
function ChatMessage({ message }) {
  const { role, text } = message;
  return (
    <div className={
      (role === "user") ? (
        "m-1 w-full flex justify-end"
      ) : (
        "m-1 w-full flex"
      )
    }
    >
      <div className={
        (role === "user") ? (
          "bg-cyan-200 max-w-2/3 rounded-lg p-3 max-w-96"
        ) : (
          "bg-indigo-300 max-w-2/3 rounded-lg p-3 max-w-96"
        )


      }>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
