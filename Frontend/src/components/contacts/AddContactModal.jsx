import { Form } from "react-router-dom";
import { useForm } from 'react-hook-form';

const formItems = [
  "name",
  "organization",
  "role",
  "context",
  "goals",
];
const username = "mayank"


function AddContactModal({ modalSetter }) {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const closeModal = () => {
    modalSetter(false);
  }

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/contacts/newContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: { ...data }, username: username }), // Nest data inside a "contact" object
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log('Contact added successfully!'); // Handle success message or action
      closeModal(); // Close modal on success
    } catch (err) {
      console.error('Error:', err.message); // Handle errors
    }
  };

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


        <Form className="flex-col w-full h-full px-4 pt-2 pb-4 justify-center" onSubmit={handleSubmit(onSubmit)}>
          {formItems.map((item, i) => (
            <div key={i} className="w-full my-4 flex flex-col">
              <label htmlFor={item} className="ml-4">
                {item.charAt(0).toUpperCase() + item.slice(1) + ":"}
              </label>
              <input
                {...register(item, { required: true })} // Use register from useForm for validation
                name={item}
                className={
                  (item === "goals") ? (
                    "ml-2 border-2 rounded-lg p-1 flex-grow w-full h-24"
                  ) : (
                    "ml-2 border-2 rounded-lg p-1 flex-grow w-full"
                  )}
              />
              {errors[item] && <p className="text-red-500">{errors[item].message}</p>} {/* Display validation errors */}
            </div>
          ))}

          <div className="w-full flex justify-center mt-6">
            <button type="submit" className="text-lg bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 py-2 px-4 rounded-lg mx-8 w-2/3">
              Add contact
            </button>
          </div>
        </Form>

      </div>
    </div>
  );
}

export default AddContactModal;
