import React, { createContext, useState, useReducer, useEffect } from "react";
import { auth } from "./firebase";

const initialState = {
  user: {}
};

const StoreContext = createContext(initialState);

function storeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER": {
      return {
        ...state,
        user: action.payload
      };
    }
  }

  return state;
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const [loaded, setLoaded] = useState(0);
  const incLoaded = () => setLoaded(val => val + 1);

  useEffect(() => {
    const userUnsub = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: "UPDATE_USER",
          payload: {
            id: user.uid
          }
        });
      } else {
        dispatch({
          type: "UPDATE_USER",
          payload: {}
        });
      }

      incLoaded();
    });

    return () => {
      userUnsub();
    };
  }, []);

  return (
    <StoreContext.Provider value={state}>
      {loaded >= 1 && children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

export { StoreProvider };
