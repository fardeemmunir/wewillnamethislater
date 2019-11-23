import React from "react";

const UpdateForm = () => {
  return (
    <div className="mb-10">
      <form>
        <textarea
          className="w-full shadow rounded h-20 mb-2 p-2"
          placeholder="What have you accomplished?"
        ></textarea>
        <div className="flex flex-row-reverse">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
