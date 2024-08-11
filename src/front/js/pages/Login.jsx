import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actions.login(email, password);
    if (response) {
      navigate("/private");
    }
  };

  return (
    <>
      <div className="container mx-3 gap">
        <h2 className="text-center">Login</h2>
        <form className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            value={email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signin
          </button>
        </form>
      </div>
      <div className="m-2">
        <Link to="/">Register</Link>
      </div>
    </>
  );
};

export default Login;
