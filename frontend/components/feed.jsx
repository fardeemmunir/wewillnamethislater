import React from "react";
import Header from "./header";

const items = [
  {
    date: "5th Jan 2019",
    contents: "Ran for 30 mins without stopping!",
    author: "Bob"
  },
  {
    date: "5th April 2019",
    contents: "Ran for 30 mins without stopping!",
    author: "Jennifer"
  },
  {
    date: "5th Oct 2019",
    contents: "Ran for 30 mins without stopping!",
    author: "Kyle"
  }
];

const Feed = () => {
  return (
    <ul>
      {items.map((info, i) => (
        <li key={i} className="p-2 border-b-2">
          <header className="flex mb-2">
            <p className="font-bold pr-5">{info.author}</p>
            <p className="opacity-50 italic">{info.date}</p>
          </header>
          <p>{info.contents}</p>
        </li>
      ))}
    </ul>
  );
};

export default Feed;
