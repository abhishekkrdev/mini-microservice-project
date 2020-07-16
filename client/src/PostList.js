import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import Axios from "axios";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await Axios.get("http://posts.com:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className="card" style={{ width: "30%", marginBottom: "20px" }}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
}

export default PostList;
