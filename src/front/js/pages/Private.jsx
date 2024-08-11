import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Private = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { store, actions } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();
    // const data = await actions.createPost(content);
    actions.getPosts();
 }

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
        <div className="ms-auto">
          <button onClick={logout} className="btn btn-primary">
            logout
          </button>
        </div>
      </div>
      <div>
        <div className="m-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Contenido
              </label>
              <textarea
                className="form-control"
                placeholder="contenido"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Private;