import React, { useState } from 'react'; // Use useState for modal visibility

function AddReply({ onSubmit, modalVisible, setModalVisible }) {
  const [message, setMessage] = useState(''); // State for input field

  const handleClose = () => {
    setModalVisible(false); // Hide modal
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update message state
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (message) { // Check if message is empty
      onSubmit(message); // Call API with message in body
      setMessage(''); // Clear message input after submission
      setModalVisible(false); // Close modal after successful submission
    }
  };

  return (
    <div
      className={`absolute w-full h-full bg-black z-30 bg-opacity-40 flex items-center justify-center ${
        modalVisible ? '' : 'hidden' // Conditionally show/hide modal
      }`}
    >
      <div className="bg-white w-1/2 h-2/3 rounded-xl p-6">
        <div className="w-full flex items-center justify-between pb-4 border-b">
          <div className="w-10"></div>
          <h3 className="text-2xl font-semibold">Add Reply</h3>
          <div className="w-10">
            <i
              onClick={handleClose}
              className="material-icons text-4xl hover:cursor-pointer"
            >
              close
            </i>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={message}
              onChange={handleInputChange}
              placeholder="Enter your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50"
            disabled={!message} // Disable button if message is empty
          >
            Add Reply
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddReply;
