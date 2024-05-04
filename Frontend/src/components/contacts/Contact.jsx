
function Contact({ id, name, title, company, goal }) {

  return (
    <div className="h-full flex">
      <div className="flex-1">
        <h4 className="text-2xl">Chat</h4>
      </div>

      <div className="flex flex-col flex-1"> 
        <div className="flex-1">
          <h5 className="text-xl">Contact Info</h5>
        </div>
        <div className="flex-1 text-xl">
          <h6>Goals</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;
