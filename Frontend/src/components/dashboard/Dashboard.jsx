
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
    <div className="flex-col pl-[7.5rem] bg-[#f9f9f9] w-full">
      <div className="my-6 z-10 text-5xl">Reports</div>
      <hr className="mr-20"/>
      <div className="flex items-center justify-evenly">
        <div className="grid grid-cols-2 gap-3 w-[31rem] h-[19rem] mt-6">
          <div className="mr-3 bg-white rounded-2xl">
            <div className="mt-4 ml-4">Contacts Number</div>
            <div className="mt-4 ml-4 text-4xl">20</div>
          </div>

          <div className="mr-3 bg-white rounded-2xl">
            <div className="mt-4 ml-4">Responses</div>
            <div className="mt-4 ml-4 text-4xl">20</div>
          </div>
        </div>
        <div className="w-[22.6rem] h-[28.3rem] bg-white rounded-2xl mt-8 p-8">
          <h1>Success Rate: 50%</h1>
          <div className="mt-12">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
