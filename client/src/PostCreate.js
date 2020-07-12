import React, { useState } from "react";
import axios from "axios";

function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    console.log("Submitted");
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default PostCreate;
