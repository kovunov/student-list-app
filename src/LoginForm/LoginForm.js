import React from "react";

//React uses virtual DOM to compare the new state of the DOM tree with the old state
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = ({username, setUsername, password, setPassword, setIsAdmin}) => {
  console.log("Login form rendered"); 
  const adminCreds = {username: "admin", password: "admin"};
  const handleLogin = (event) => {
    if (username === adminCreds.username && password === adminCreds.password) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };
  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
  //username = 'bobby' - WRONG
  return form;
};
