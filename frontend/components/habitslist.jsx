import React, { useContext } from "react";
import StoreContext from "../lib/store";

const HabitsList = () => {
  const { habits, flipHabit } = useContext(StoreContext);

  function hasHabitBeenCompleted(id) {
    const date = new Date();
    const today =
      "" + date.getUTCFullYear() + (date.getMonth() + 1) + date.getDate();

    return habits.find(info => info.id === id).dates_completed.includes(today);
  }

  return (
    <div className="bg-white p-2 rounded">
      <h1 className="text-xl mb-10">Today</h1>

      <ul>
        {habits.map(habit => (
          <li key={habit.id} className="mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="hidden"
                checked={hasHabitBeenCompleted(habit.id)}
                onChange={() => flipHabit(habit.id)}
              />
              <span
                className={
                  "h-5 w-5 border-2 rounded-full mr-2 " +
                  (hasHabitBeenCompleted(habit.id) && "bg-gray-300")
                }
              ></span>
              <p
                className={
                  hasHabitBeenCompleted(habit.id)
                    ? "line-through text-gray-400"
                    : ""
                }
              >
                {habit.title}
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
