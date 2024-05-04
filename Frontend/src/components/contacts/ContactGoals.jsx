
function ContactGoals() {

  const goals = [
    "Learn more about their department",
    "Schedule a coffee chat",
    "Get that referral!",
  ];

  const onCheckBoxClick = (e) => {
    (e.target.textContent === "check_box") ? (
      e.target.textContent = "check_box_outline_blank"
    ) : (
      e.target.textContent = "check_box"
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-center h-12 border-b pb-4">
        <h6 className="text-xl font-semibold">Goals</h6>
      </div>

      <ul className="list-disc">
        {
          goals.map((goal, i) => {
            return (
              <li
                className="ml-4 pt-3"
                key={i}
              >
                <div className="flex items-center justify-between p-1">
                  <p>{goal}</p>
                  <i 
                  className="material-icons text-cyan-500 hover:cursor-pointer"
                  onClick={onCheckBoxClick}
                  >
                    check_box_outline_blank
                  </i>
                </div>
              </li>
            );
          })
        }
      </ul>

    </div>
  );
}

export default ContactGoals;
