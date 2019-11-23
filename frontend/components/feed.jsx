import React, { useContext } from "react";
import StoreContext from "../lib/store";

const Feed = () => {
  const { messages } = useContext(StoreContext);

  return (
    <ul>
      {messages.map((message, i) => (
        <li key={i} className="p-2 border-b-2">
          <header className="flex mb-2 items-center">
            <p className="font-bold pr-5">{message.username}</p>
            <p className="opacity-50 italic text-xs">{message.created_at}</p>
          </header>
          <p>{message.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Feed;
