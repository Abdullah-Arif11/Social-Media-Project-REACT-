import { createContext, useCallback, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  delPost: () => {},
});
const PostListProvider = ({ children }) => {
  const PostListReducer = (crrPostList, action) => {
    let updatedPostList = crrPostList;
    if (action.type === "DEL_POST") {
      updatedPostList = crrPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_POST") {
      updatedPostList = [action.payload.post, ...crrPostList];
    } else if (action.type === "FETCH_POSTS") {
      updatedPostList = action.payload.posts;
    }
    return updatedPostList;
  };
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };
  const delPost = useCallback((postId) => {
    dispatchPostList({
      type: "DEL_POST",
      payload: {
        postId,
      },
    });
  }, [dispatchPostList]);
  return (
    <PostListContext.Provider
      value={{ postList, addPost, delPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
