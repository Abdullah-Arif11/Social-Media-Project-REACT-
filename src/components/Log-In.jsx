import { useRef, useState } from "react";
import Header from "./Header";
import "react-phone-input-2/lib/bootstrap.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
const LogIn = () => {
  const passElementRef = useRef()
  const checkPass = () => {
    let passElement = passElementRef.current
    if(passElement.type === "password") {
      passElement.type = "text"
    }
    else {
      passElement.type = "password"
    }
  }
  const [phone, setPhone] = useState("");
  return (
    <>
    <Header />
    <div className="sign-up-container">
      <div className="sign-up-form-container border border-info">
        <div className="sign-up-head">
          <h1 className="sign-up-header">Log-In</h1>
          <p className="sign-up-para">
            Log-In to stay connected with your friends.
          </p>
        </div>
        <hr />
        <div className="form-container">
          <form>
            <div className="row2">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control border-success"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="row2">
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  ref={passElementRef}
                  className="form-control border-success"
                  id="password"
                  placeholder=""
                />
                <input type="checkbox" onClick={checkPass} /><span className="check-pass">Show Password</span>
              </div>
            </div>
            <div className="sub-btn">
              <button
                className="sign-up-btn btn btn-primary"
                style={{ verticalAlign: "middle" }}
              >
                <span><Link to="/" className="sign-up-btn-link">Log-In</Link></span>
              </button>
            </div>
          </form>
        </div>
        <hr />
        <footer className="sign-up-foot">
          <p id="or">OR</p>
          <p>Create new acoount?<Link to="/Sign-Up">Sign-Up</Link></p>
        </footer>
      </div>
    </div>
    </>
  );
};
export default LogIn;
