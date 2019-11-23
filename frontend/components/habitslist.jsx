import React from "react";

const HabitsList = () => {
  return (
    <div className="bg-white p-2 rounded">
      <h1 className="text-xl mb-10">Today</h1>

      <ul>
        {[
          { name: "Meditate", checked: false },
          { name: "Run", checked: true }
        ].map(item => (
          <li key={item.name} className="mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="hidden"
                checked={item.checked}
                readOnly
              />
              <span
                className={
                  "h-5 w-5 border-2 rounded-full mr-2 " +
                  (item.checked && "bg-gray-300")
                }
              ></span>
              <p>{item.name}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
