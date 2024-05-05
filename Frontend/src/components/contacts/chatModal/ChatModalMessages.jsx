
function ChatModalMessages({ isActive }) {

  return (
    <div className={isActive && "w-1/2 h-2/3 bg-white rounded-lg p-8 transition-all duration-700"}>
      
      <div>
        this part should have an option to enter a prompt to the AI,
        or to enter a message from the contact. these tasks will be done through 
        the chat input below. User will also be given options from
        gemini, such as enhance message, generate message, brainstorm topics.
        this pane represents the main interface with Gemini.
        <br/><br/>
        also can somone please put something interesting and relevant
        in the sidebars?
      </div>

    </div>
    
  );
}

export default ChatModalMessages;
