import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Contact from "./Contact.jsx";
import AddContactModal from "./AddContactModal.jsx";
import {useEffect, useState} from "react";

function ContactsPage() {
  const { contactid } = useParams();
  const [contactModalIsVisible, setContactModalIsVisible] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const username = "mayank"

  const openContactModal = () => {
    setContactModalIsVisible(true);
  }



  useEffect(()=>{
    (async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`http://127.0.0.1:3000/contacts?username=${username}`); // Replace with your endpoint pattern
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        console.log("Ans")
        const jsonData = await response.json();
        setData(jsonData.contacts)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [])

  return (
    <div className="flex w-full">
      <div className="bg-white w-80 z-10 ml-20 ">
        <div className="border border-black-900 max-h-screen w-80 flex flex-col">
          <div className="flex justify-between items-center ml-4 pr-4 border-r border-slate-300">

            <h2 className="text-4xl py-4 font-semibold">Contacts</h2>

            <button
              className=""
              onClick={openContactModal}
              >
              <i className="material-icons text-5xl pt-1 text-cyan-500">
                add_box
              </i>
            </button>
            
          </div>
          <ul className="overflow-y-auto max-h-full">
            {isLoading && <p>Data is being loaded...</p>}
            {data &&
                (data.map((contact, i) => {
                  return (
                    <li key={i} className="border bg-white hover:bg-slate-100">
                      <NavLink to={`/contacts/${contact.id}`}>
                        <div className="p-4">
                          <h4 className="text-xl">{contact.name}</h4>
                          <div>
                            <p className="text-gray-500">
                              <em>{contact.role + " at " + contact.organization}</em>
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  );
                }))
            }
          </ul>
        </div>
        
      </div>

      <main className="h-full w-full">
        {
          (
            contactid
          ) ? (
            <Contact
                id={data.find(dict => dict.id === contactid).id}
                name={data.find(dict => dict.id === contactid).name}
                role={data.find(dict => dict.id === contactid).role}
                organization={data.find(dict => dict.id === contactid).organization}
                goals={data.find(dict => dict.id === contactid).goals}
                conversation_model={data.find(dict => dict.id === contactid).conversation_history}
            />
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
