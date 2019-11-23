import React, { createContext, useState, useReducer, useEffect } from "react";
import { auth } from "./firebase";

const initialState = {
  user: {}
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(0);
  const incLoaded = () => setLoaded(val => val + 1);

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
          setUser(data);
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [user]);

  return (
    <StoreContext.Provider value={{ user }}>
      {loaded >= 1 && children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

export { StoreProvider };
