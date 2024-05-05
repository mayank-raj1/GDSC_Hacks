import React, { useState } from 'react';

function ChatModalText({ isActive, onSendMessage }) {

  const [inputText, setInputText] = useState(''); // State to store input text

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputText.trim() !== '') { // Check for Enter key and non-empty input
      onSendMessage(inputText); // Call the provided onSendMessage function with the input
      setInputText(''); // Clear the input after sending
    }
  };

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
        value={inputText} // Bind input value to state
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ChatModalText;
