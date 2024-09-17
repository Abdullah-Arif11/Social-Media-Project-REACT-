import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList, { PostListLoader } from "./components/PostList.jsx";
import CreatePost, { CreatePostAction } from "./components/CreatePost.jsx";
import SignUp from "./components/Sign-up.jsx";
import LogIn from "./components/Log-In.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: PostListLoader },
      { path: "/create-post", element: <CreatePost />, action: CreatePostAction},
    ],
  },
  {path: "/Sign-Up", element: <SignUp />},
  {path: "/Log-In", element: <LogIn />}
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
