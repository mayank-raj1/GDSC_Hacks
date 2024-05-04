
function Contact({ id, name, title, company, goal }) {

  return (
    <div className="h-full flex">
      <div className="flex-1 m-4 mr-2 p-4 bg-white rounded-lg shadow-lg">
        <h4 className="text-2xl">Chat</h4>
      </div>

      <div className="flex flex-col flex-1"> 
        <div className="flex-1 m-4 ml-2 mb-2 p-4 bg-white rounded-lg shadow-lg">
          <h5 className="text-xl">Contact Info</h5>
        </div>
        <div className="flex-1 text-xl m-4 ml-2 mt-2 p-4 bg-white rounded-lg shadow-lg">
          <h6>Goals</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;
