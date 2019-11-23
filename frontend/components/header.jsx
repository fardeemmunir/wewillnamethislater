import React, { useContext } from "react";
import Link from "next/link";

import Store from "../lib/store";
import { auth } from "../lib/firebase";

const Header = () => {
  const { user } = useContext(Store);

  return (
    <header className="bg-white py-4 mb-10">
      <div className="container flex justify-between items-center font-bold tracking-wide">
        <nav className="">
          <p>Welcome, {user.name}!</p>
          {/* <Link href="/habits">
            <a>Habits</a>
          </Link> */}
        </nav>

        <div
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => auth.signOut()}
        >
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
