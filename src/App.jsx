import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import PostListProvider from "./Store/Post-List-store";
import { Outlet } from "react-router-dom";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="appContainer">
        <SideBar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
