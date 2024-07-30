import axios from "axios";
import React, { useEffect } from "react";

const UserForm = () => {
  const newPost = { title: "aman", body: "texting", userId: 1 };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("As", response.data);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
    createPost();
  }, []);

  const createPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log("As post res", response.data.id);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  };

  return <div>UserForm</div>;
};

export default UserForm;
