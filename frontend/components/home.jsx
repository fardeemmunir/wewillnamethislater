import React from "react";
import Feed from "./feed";
import Header from "./header";
import HabitsList from "./habitslist";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex container">
        <aside className="w-1/3 mr-5">
          <HabitsList />
        </aside>
        <article className="w-2/3 rounded">
          <Feed />
        </article>
      </div>
    </div>
  );
};

export default Home;
