import React, {useState} from "react";
import { useDispatch } from "react-redux";
import login from "../slices/loginSlice";

//React uses virtual DOM to compare the new state of the DOM tree with the old state
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        disabled={email.length === 0 || password.length === 0}
        onClick={() => dispatch(login({email, password}))}
      >
        Login
      </button>
    </div>
  );
  //username = 'bobby' - WRONG
  return form;
};
