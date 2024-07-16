import React from "react";
import Note from "./Note";

const Home = () => {
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="addon-wrapping">
          Username
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="addon-wrapping">
          Email
        </span>
        <input
          type="Email"
          className="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="addon-wrapping">
          Password
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="text"
          aria-describedby="addon-wrapping"
        />
      </div>
      <button type="button" className="btn btn-primary">Submit</button>
      
      <h2 className="my-3">Your Notes</h2>

    <div className="">
      <Note/>
    </div>
    </div>
  );
};

export default Home;
