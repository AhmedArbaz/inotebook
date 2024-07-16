import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div class="input-group flex-nowrap mb-4">
        <span class="input-group-text" id="addon-wrapping">
          Username
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div class="input-group flex-nowrap mb-4">
        <span class="input-group-text" id="addon-wrapping">
          Email
        </span>
        <input
          type="Email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div class="input-group flex-nowrap mb-4">
        <span class="input-group-text" id="addon-wrapping">
          Password
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="addon-wrapping"
        />
      </div>
      <button type="button" class="btn btn-primary">Submit</button>
      
      <h2 className="my-3">Your Notes</h2>

    <div className="">
      <Notes/>
    </div>
    </div>
  );
};

export default Home;
