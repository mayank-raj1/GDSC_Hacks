import { useState } from "react";
import { Form } from "react-router-dom";

function ContactGoals() {
  const [isUserAddingGoal, setIsUserAddingGoal] = useState(false);
  const [goals, setGoals] = useState([
    "Learn more about their department",
    "Schedule a coffee chat",
    "Get that referral!",
  ]);

  const onCheckBoxClick = (e) => {
    (e.target.textContent === "check_box") ? (
      e.target.textContent = "check_box_outline_blank"
    ) : (
      e.target.textContent = "check_box"
    )
  }

  const addingGoal = () => {
    setIsUserAddingGoal(true);
  }

  const addNewGoal = (e) => {
    const goal = e.target.firstChild.value;

    setGoals(goals => [...goals, goal]);
    setIsUserAddingGoal(false);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-between items-center h-12 border-b pb-4">
        <div className="size-12"></div>
        <h6 className="text-xl font-semibold">Goals</h6>
        <div className="size-12 flex items-center justify-center">
          <i 
            className="material-icons text-3xl hover:cursor-pointer"
            onClick={addingGoal}
          >
            add
          </i>
        </div>
      </div>

      <ul className="list-disc" id="goalsList">
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

        {isUserAddingGoal && (
          <li
          className="ml-4 pt-3"
          >
          <div className="flex items-center justify-between p-1">
            <Form
              className=""
              onSubmit={addNewGoal}
            >
              <input
                autoFocus={true}
                placeholder="Add new goal..."
                className="border-2 rounded-xl p-1 flex-grow w-full"
              />
            </Form>
            <i 
              className="material-icons text-cyan-500 hover:cursor-pointer"
              onClick={onCheckBoxClick}
            >
              check_box_outline_blank
            </i>
          </div>
        </li>
        )}
      </ul>

    </div>
  );
}

export default ContactGoals;
