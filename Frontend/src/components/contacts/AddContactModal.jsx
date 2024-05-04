import { Form } from "react-router-dom"
import { useState } from "react";


const formItems = [
  "name",
  "organization",
  "role",
  "goals",
];


function AddContactModal({ modalSetter }) {
  

  const closeModal = () => {
    modalSetter(false);
  }


  return (
    <div className="absolute w-full h-full bg-black z-30 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-1/2 h-2/3 rounded-xl p-6">
        <div className="w-full flex items-center justify-between pb-4 border-b">
          <div className="w-10"></div>
          <h3 className="text-2xl font-semibold">New Contact</h3>
          <div className="w-10">
            <i
              onClick={closeModal}
              className="material-icons text-4xl hover:cursor-pointer"
            >
              close
            </i>
          </div>
        </div>

        <Form className="flex-col w-full h-full p-4 justify-center">

          {
            formItems.map((item, i) => {
              return (
                <div key={i} className="w-full my-4 flex flex-col">
                  <label htmlFor={item} className="ml-4">
                    {item.charAt(0).toUpperCase() + item.slice(1) + ":"}
                  </label>
                  <input name={item} className="ml-2 border-2 rounded-lg p-1 flex-grow w-full" />
                </div>
              );
            })
          }

          <div className="w-full flex justify-center mt-10">
            <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 py-2 px-4 rounded-lg mx-8 w-2/3">
              Add contact
            </button>
          </div>
          
        </Form>

      </div>
    </div>
  );
}

export default AddContactModal;
