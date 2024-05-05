import ChatModalMessages from "./ChatModalMessages";
import ChatModalText from "./ChatModalText";
import ChatModalSidebar from "./ChatModalSidebar";

function ChatModal({ isActive, closeModal }) {

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
        {isActive[0] && <ChatModalMessages isActive={isActive[1]} />}
        <div className="m-8 h-full w-1/3 flex flex-col items-start justify-center">
          {isActive[0] && <ChatModalSidebar isActive={isActive[2]} data={data[0]} />}
          {isActive[0] && <ChatModalSidebar isActive={isActive[2]} data={data[1]} />}

        </div>
      </div>

      
      {isActive[1] && <ChatModalText isActive={isActive[3]} />}
    </div>
  );
}

export default ChatModal;
