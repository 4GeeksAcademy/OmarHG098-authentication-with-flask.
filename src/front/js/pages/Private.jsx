import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Private = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { store, actions } = useContext(Context);

  function logout() {
    actions.logout();
    navigate("/login");
  }

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="card">
      <div className="card-body d-flex">
      <h2>This is a cool photo only I can see</h2>
        <div className="ms-auto">
          
          <button onClick={logout} className="btn btn-primary">
            logout
          </button>
        </div>
      </div>
      <img className="d-block w-100" src="https://picsum.photos/900/1200?random=1" alt="First slide" />
      
    </div>
  );
};

export default Private;
