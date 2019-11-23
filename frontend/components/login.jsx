import React, { useState } from "react";

import { auth } from "../lib/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isSigningUp, setIsSigningUp] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (isSigningUp) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(`User with ${res.user.uid} has name ${name}`);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      auth.signInWithEmailAndPassword(email, password);
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {isSigningUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {isSigningUp ? "Sign Up" : "Login"}
          </button>

          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={() => setIsSigningUp(!isSigningUp)}
            type="button"
          >
            {isSigningUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
