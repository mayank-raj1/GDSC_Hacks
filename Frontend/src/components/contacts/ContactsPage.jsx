import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Contact from "./Contact.jsx";
import AddContactModal from "./AddContactModal.jsx";
import { useState } from "react";

function ContactsPage() {
  const { contactid } = useParams();
  const [contactModalIsVisible, setContactModalIsVisible] = useState(false);

  const openContactModal = () => {
    setContactModalIsVisible(true);
  }

  let data = [
    {
      name: "John Doe",
      title: "Software Engineer",
      company: "Google",
      goal: "Get a referral",
      id: "abc123",

    },
  ]
  for (let i = 0; i < 4; i++){
    data = data.concat(data)
  } 

  return (
    <div className="flex w-full">
      <div className="bg-white w-96 z-10 ml-20 ">      
        <div className="border border-black-900 max-h-screen w-96 flex flex-col">
          <div className="flex justify-between items-center ml-4 pr-4 border-r border-slate-300">

            <h2 className="text-4xl py-4 font-semibold">Contacts</h2>
            <button onClick={openContactModal}>
              <i className="material-icons text-5xl pt-1 text-cyan-500">
                add_box
              </i>
            </button>
          </div>
          <ul className="overflow-y-auto max-h-full">
            {
              data.map((contact, i) => {
                return (                  
                  <li key={i} className="border bg-white p-4 hover:bg-slate-100">
                    <NavLink to={`/contacts/${contact.id}`}>
                      <h4 className="text-xl">{contact.name}</h4>
                      <div>
                        <p className="text-gray-500">
                          <em>{contact.title + " at " + contact.company}</em>
                        </p>
                      </div>
                    </NavLink>
                  </li>
                );
              })
            }
          </ul>
        </div>
        
      </div>

      <main className="h-full w-full">
        {
          (
            contactid
          ) ? (
            <Contact id={contactid} name={data[0].name} title={data[1].title}
            company={data[2].company} goal={data[3].goal}/>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="w-fit font-semibold text-2xl">Select a Contact</p>
            </div>
          )
        }
      </main>

      {contactModalIsVisible && <AddContactModal modalState={contactModalIsVisible} modalSetter={setContactModalIsVisible} />}
    </div>
  );
}

export default ContactsPage;
