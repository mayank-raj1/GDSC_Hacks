import { Form } from "react-router-dom"
import { useState } from "react";


// const formItems = [
//   "name",
//   "organization",
//   "role",
//   "context",
//   "goals",
// ];


function EditContactModal({ editModalSetter, props }) {
  const { name, role, company, met } = props;

  const formItems = [
    {
      k: "name",
      v: name,
    },
    {
      k: "organization",
      v: company,
    },
    {
      k: "role",
      v: role,
    },
    {
      k: "context",
      v: met,
    },
  ]

  const closeModal = () => {
    editModalSetter(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-30 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-1/2 h-2/3 rounded-xl p-6">
        <div className="w-full flex items-center justify-between pb-4 border-b">
          <div className="w-10"></div>
          <h3 className="text-2xl font-semibold">Edit Contact</h3>
          <div className="w-10">
            <i
              onClick={closeModal}
              className="material-icons text-4xl hover:cursor-pointer"
            >
              close
            </i>
          </div>
        </div>

        <Form className="flex-col w-full h-full px-4 pt-2 pb-4 justify-center">

          {
            formItems.map((item, i) => {
              return (
                <div key={i} className="w-full my-4 flex flex-col">
                  <label htmlFor={item.k} className="ml-4">
                    {item.k.charAt(0).toUpperCase() + item.k.slice(1) + ":"}
                  </label>
                  {/* <input 
                    name={item.k} 
                    defaultValue={item.v}
                    className={
                      (item.k === "context") ? (
                        "text-start text-wrap ml-2 border-2 rounded-lg p-1 flex-grow w-full h-24"
                      ) : (
                        "text-start text-wrap ml-2 border-2 rounded-lg p-1 flex-grow w-full"
                      )}
                  /> */}

                    {
                      (item.k === "context") ? (
                        <textarea
                          className="text-start text-wrap ml-2 border-2 rounded-lg p-1 flex-grow w-full h-24" 
                          defaultValue={item.v}
                        />
                      ) : (
                        <input 
                          name={item.k} 
                          defaultValue={item.v}
                          className={"text-start text-wrap ml-2 border-2 rounded-lg p-1 flex-grow w-full"}
                        />
                      )
                    }


                </div>
              );
            })
          }

          <div className="w-full flex justify-center mt-6">
            <button 
              type="submit" 
              className="text-lg bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 py-2 px-4 rounded-lg mx-8 w-2/3"
            >
              Update contact
            </button>
          </div>
          
        </Form>

      </div>
    </div>
  );
}

export default EditContactModal;
