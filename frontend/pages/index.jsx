import React, { useContext } from "react";
import Head from "next/head";

import "../styles/main.css";
import Header from "../components/header";
import Login from "../components/login";
import StoreContext from "../lib/store";
import Feed from "../components/feed";
import UpdateForm from "../components/updateform";
import HomePage from "../components/home";

const Home = () => {
  const { user } = useContext(StoreContext);

  return (
    <main>
      <Head>
        <title>Build Chicago</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user.id ? (
        <HomePage />
      ) : (
        <div className="w-full mx-auto pt-32">
          <Login />
        </div>
      )}
    </main>
  );
};

export default Home;
