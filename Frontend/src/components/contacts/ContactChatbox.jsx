import Message from "./Message.jsx";
import {useEffect, useState} from "react";
import ChatModal from "./chatModal/ChatModal.jsx";
import AddReply from "./AddReply.jsx";

function ContactChatBox({conversation_model, contact_id, extra}) {
  const [isChatActive, setIsChatActive] = useState(false);
  const [isChatActive2, setIsChatActive2] = useState(false);
  const [isChatActive3, setIsChatActive3] = useState(false);
  const [isChatActive4, setIsChatActive4] = useState(false);

  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {}, [conversation_model])

  const handleSubmitFunction = async (message) => {
  try {
    console.log(contact_id)
    console.log(extra)
    const response = await fetch('http://127.0.0.1:3000/update_conversation_sender', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contact_id: contact_id,
        message: message
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    conversation_model = data.conversation_history
  } catch (error) {
    console.error('Error updating conversation:', error);
  }
};

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

  return (
    <>
    <div className="w-full h-full flex flex-col justify-end">
      <div className="w-full flex justify-center h-12 border-b pb-4">
        <h4 className="text-2xl font-semibold">Chat</h4>
      </div>
      <div className="w-full h-full flex flex-col-reverse items-center">
        {conversation_model ? (
            conversation_model.map((message, i) => {
              return <Message key={i} message={message}/>
            })) : (
          <h2 className="text-xl font-semibold text-gray-800 items-center justify-center">
          Add an initial message
          </h2>
          )
        }

      </div>

      <div className="h-16 mt-4 ">
        <div 
          className="relative"
        >
          <div className="flex space-x-2">
            <button
                className="bg-indigo-300 p-2 pl-4 rounded-full border-2 border-black w-full"
                onClick={handleOpenModal}
            >
              Add Response!
            </button>
            <input
                className="p-2 pl-4 rounded-full border-2 border-black w-full"
                onClick={activateChat}
                placeholder="Add to the chat..."
            />
          </div>
        </div>
      </div>

    </div>
      {<AddReply modalVisible={modalVisible} setModalVisible={setModalVisible} onSubmit={handleSubmitFunction} />}
      {<ChatModal isActive={[isChatActive, isChatActive2, isChatActive3, isChatActive4]} closeModal={closeModal} />}
    </>
  );
}

export default ContactChatBox;
