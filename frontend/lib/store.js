import React, { createContext, useState, useReducer, useEffect } from "react";
import { auth } from "./firebase";
import Pusher from "pusher-js";

const initialState = {
  user: {}
};

const StoreContext = createContext(initialState);

var pusher = new Pusher("e74def3126649fba68e9", {
  cluster: "us2"
});

const StoreProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [habits, setHabits] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(0);
  const incLoaded = () => setLoaded(val => val + 1);

  useEffect(() => {
    var channel = pusher.subscribe("messages-channel");

    channel.bind("new-message", function(data) {
      console.log("New Message: ", data);
      setMessages(old => [data.message, ...old]);
    });
  }, []);

  useEffect(() => {
    const userUnsub = auth.onAuthStateChanged(async function(user) {
      if (user) {
        setUser({
          id: user.uid
        });
      } else {
        setUser({});
      }

      incLoaded();
    });

    return () => {
      userUnsub();
    };
  }, []);

  useEffect(() => {
    if (!user.id || user.name) return;

    const timer = setTimeout(() => {
      fetch(`http://10.1.117.193/users/${user.id}`)
        .then(res => res.json())
        .then(data => {
          const userInfo = data.user;
          const habitInfo = data.habits;
          const messagesInfo = data.messages;
          setUser(userInfo);
          setHabits(habitInfo);
          setMessages(messagesInfo);
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [user]);

  function flipHabit(id) {
    const updatedHabits = Array.from(habits);
    const date = new Date();
    const today =
      "" + date.getUTCFullYear() + (date.getMonth() + 1) + date.getDate();

    const selectedHabit = habits.find(habitInfo => habitInfo.id === id);

    if (selectedHabit.dates_completed.includes(today)) {
      const index = selectedHabit.dates_completed.indexOf(today);
      selectedHabit.dates_completed.splice(index, 1);
    } else {
      selectedHabit.dates_completed.push(today);
    }

    fetch("http://10.1.117.193/habits/" + id, {
      method: "PUT"
    });

    setHabits(updatedHabits);
  }

  return (
    <StoreContext.Provider value={{ user, messages, habits, flipHabit }}>
      {loaded >= 1 && children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

export { StoreProvider };
