import ContactChatBox from "./ContactChatbox.jsx";
import ContactInfo from "./ContactInfo";
import ContactGoals from "./ContactGoals";

function Contact({ id, name, title, company, goal }) {

  return (
    <div className="h-full flex">
      <div className="flex-1 m-4 mr-2 p-4 w-full bg-white rounded-lg shadow-md">
        <ContactChatBox />
      </div>

      <div className="flex flex-col flex-1"> 
        <div className="flex-1 m-4 ml-2 mb-2 p-4 bg-white rounded-lg shadow-md">
          <ContactInfo />
        </div>
        <div className="flex-1 text-xl m-4 ml-2 mt-2 p-4 bg-white rounded-lg shadow-md">
          <ContactGoals />
        </div>
      </div>
    </div>
  );
}

export default Contact;
