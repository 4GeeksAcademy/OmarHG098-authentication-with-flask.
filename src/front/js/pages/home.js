import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const handleSubmit = async(e) => {
      e.preventDefault()
      const response = await actions.register(email, password)
      console.log(response)
    }

  return (
    <>
      <div className="container mx-3 gap">
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
          Signup
        </button>
        </form>
      </div>
      <div className="text-center mt-5">
        <div className="alert alert-info">{store.message}</div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://start.4geeksacademy.com/starters/react-flask">
            Read documentation
          </a>
        </p>
      </div>
    </>
  );
};
