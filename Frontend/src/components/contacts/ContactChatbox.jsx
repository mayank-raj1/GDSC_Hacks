import Message from "./Message.jsx";
import { Form } from "react-router-dom";
import { useState } from "react";
import ChatModal from "./chatModal/ChatModal.jsx";

function ContactChatBox() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isChatActive2, setIsChatActive2] = useState(false);
  const [isChatActive3, setIsChatActive3] = useState(false);
  const [isChatActive4, setIsChatActive4] = useState(false);


  const activateChat = async () => {
    setIsChatActive(true);
    await new Promise(r => setTimeout(r, 800))
    setIsChatActive2(true);
    await new Promise(r => setTimeout(r, 500))
    setIsChatActive3(true);
    await new Promise(r => setTimeout(r, 500))
    setIsChatActive4(true);
  }

  const closeModal = () => {
    setIsChatActive(false);
    setIsChatActive2(false);
    setIsChatActive3(false);
    setIsChatActive4(false);
  }

  const dateFunc = () => {
    let date = new Date()
    date = date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return date;
  }
  
  const sampleMessages = [
    {
      sender: "Jane Doe",
      text: "Hello! How are you?",
      timestamp: Date.now(),
    },
    {
      sender: "You",
      text: "Hello! How are you?",
      timestamp: Date.now(),
    },
    {
      sender: "Jane Doe",
      text: "Hello! How are you?",
      timestamp: Date.now(),
    },
    {
      sender: "You",
      text: "Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you? Hello! How are you?",
      timestamp: dateFunc(),
    },
  ]

  return (
    <>
    <div className="w-full h-full flex flex-col justify-end">
      <div className="w-full flex justify-center h-12 border-b pb-4">
        <h4 className="text-2xl font-semibold">Chat</h4>
      </div>
      <div className="w-full h-full flex flex-col-reverse items-center">
        {
          sampleMessages.map((message, i) => {
            return <Message key={i} message={message} />
          })
        }
      </div>

      <div className="h-16 mt-4 ">
        <div 
          className="relative"
          onSubmit={console.log('test')}
        >
          <input
            className="p-2 pl-4 rounded-full border-2 border-black w-full"
            onClick={activateChat}
            placeholder="Add to the chat..."
          />
          {/* <button
            type="submit"
            className="bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 absolute py-1.5 px-3 right-2 top-1 rounded-xl"
          >
            Chat
          </button> */}
        </div>
      </div>
      
    </div>
    {<ChatModal isActive={[isChatActive, isChatActive2, isChatActive3, isChatActive4]} closeModal={closeModal} />}
    </>
  );
}

export default ContactChatBox;
