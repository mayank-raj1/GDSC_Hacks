import ChatModalMessages from "./ChatModalMessages";
import ChatModalText from "./ChatModalText";
import ChatModalSidebar from "./ChatModalSidebar";
import {useEffect, useState} from "react";

function ChatModal({ isActive, closeModal, conection_id }) {
  const [chat_history, setchat_history] = useState([])
  const [model_history, setmodel_history] = useState([])

  const data = [
    {
      title: "Sidebar 1",
      text: "Sidebar 1 has information on XYZ"
    },
    {
      title: "Sidebar 2",
      text: "Sidebar 2 has information on ABC"
    },
  ]

  useEffect(()=>{
  }, [chat_history])
  const handleSendMessage = async (text) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact_id: conection_id,
        chat_history: chat_history,
        model_history:model_history
      }),
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    setmodel_history(data.model_history)
    setchat_history(data.chat_history)

    // Handle the API response data here (optional)
    // For example, update component state or display a success message
    // setInputText(data.message); // Example: Update state with response message

  } catch (error) {
    console.error('Error sending message:', error); // Log the error for debugging
    // Handle errors appropriately (optional)
    // For example, display an error message to the user
  }
};
  const [inputText, setInputText] = useState('')

  return (
    <div
      className={isActive[0] && "fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center bg-opacity-55 z-10 transition-all duration-700"}
    >
      {isActive[1] &&
        <button className="absolute top-6 right-6" onClick={closeModal}>
          <i className="material-icons text-6xl  text-white">close</i>
        </button>
      }

      <div className=" w-full h-full flex items-center justify-center">
        {isActive[0] && <ChatModalMessages isActive={isActive[1]} chat_history={chat_history}/>}
        <div className="m-8 h-full w-1/3 flex flex-col items-start justify-center">
          {isActive[0] && <ChatModalSidebar isActive={isActive[2]} data={data[0]} />}
          {isActive[0] && <ChatModalSidebar isActive={isActive[2]} data={data[1]} />}

        </div>
      </div>


      {isActive[1] && <ChatModalText isActive={isActive[3]} onSendMessage={handleSendMessage} />}
    </div>
  );
}

export default ChatModal;
