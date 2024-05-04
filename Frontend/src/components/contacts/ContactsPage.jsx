
function ContactsPage() {

  let data = [
    {
      name: "John Doe",
      title: "Software Engineer",
      company: "Google",
      goal: "Get a referral",
    },
  ]
  for (let i = 0; i < 3; i++){
    data = data.concat(data)
  } 

  return (
    <div className="bg-white w-96 z-10 ml-20">
    
      <main className="border border-black-900">
        <div className="flex justify-between items-center mx-4">
          <h2 className="text-4xl py-4 font-semibold">Contacts</h2>
          <button>
            <i className="material-icons text-5xl pt-1 text-cyan-500">
              add_box
            </i>
          </button>
        </div>
        <div className="">
          {
            data.map((contact, i) => {
              return (
                <div key={i} className="border bg-white p-4">
                  <h4 className="text-xl">{contact.name}</h4>
                  <div>
                    <p className="text-gray-500">
                      <em>{contact.title + " at " + contact.company}</em>
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>

      </main>

    </div>
  );
}

export default ContactsPage;
