import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/Post-List-store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData()
  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const PostListLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts
    });
};
export default PostList;
