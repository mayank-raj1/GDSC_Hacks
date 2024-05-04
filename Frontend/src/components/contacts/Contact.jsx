import ContactChatBox from "./ContactChatbox.jsx";
import ContactInfo from "./ContactInfo";
import ContactGoals from "./ContactGoals";


function Contact({ id, name, role, company, goal }) {



  const met = "Met Jane at Google Cloud Next. She manages the Google Compute Engine team. We chatted about Keras, and discussed running LLMs on Google Cloud.";

  return (
    <>
    <div className="h-full flex">


      <div className=" w-2/3 m-4 mr-2 p-4 bg-white rounded-lg shadow-md">
        <ContactChatBox />
      </div>

      <div className="flex flex-col w-1/3"> 
        <div className="m-4 ml-2 mb-2 p-4 bg-white rounded-lg shadow-md">
          <ContactInfo name={name} role={role} company={company} met={met} />
        </div>
        <div className=" text-xl m-4 ml-2 mt-2 p-4 bg-white rounded-lg shadow-md">
          <ContactGoals />
        </div>
        <div className="flex-1"></div>
      </div>

    </div>

    </>
  );
}

export default Contact;
