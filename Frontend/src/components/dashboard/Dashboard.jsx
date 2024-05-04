

function Dashboard() {

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
    <div className="flex">
      <div className="bg-white w-96 z-10 ml-20">
      <main className="border border-black-900 max-h-screen fixed w-96 flex flex-col">
        <div className="flex justify-between items-center mx-4">
          <h2 className="text-4xl py-4 font-semibold indent-4">DashBoard</h2>
        </div>
      </main>
      <div className="overflow-y-auto max-h-full">
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
      </div>
    </div>
    
  );
}

export default Dashboard;
