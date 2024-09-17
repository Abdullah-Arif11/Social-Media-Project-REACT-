import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Header from "./Header"
import { Link } from "react-router-dom";
const SignUp = () => {
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
          <h1 className="sign-up-header">Sign-Up</h1>
          <p className="sign-up-para">
            Sign-Up to stay connected with your friends.
          </p>
        </div>
        <hr />
        <div className="form-container">
          <form>
            <div className="row1">
              <div className="elm-1">
                <label htmlFor="first-name">Fisrt Name:</label>
                <input
                  type="text"
                  className="row-1-input form-control border-success"
                />
              </div>
              <div className="elm-1">
                <label htmlFor="first-name">Last Name:</label>
                <input
                  type="text"
                  className="row-1-input form-control border-success"
                />
              </div>
            </div>
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
            <div className="row2">
              <div>Phone Number:</div>
              <PhoneInput
                style={{ margin: "10px 0 24px 0" }}
                country={"pk"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="row1">
              <div className="elm-1">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  name="age"
                  className="row-1-input form-control border-success"
                />
              </div>
              <div className="elm-2">
                <label htmlFor="gender">Gender:</label>
                <div className="Gender">
                  <input type="radio" name="gender" />
                  <span className="radio-btn">Female</span>
                  <input type="radio" name="gender" />
                  <span className="radio-btn">Male</span>
                </div>
              </div>
            </div>
            <div className="sub-btn">
              <button
                type="submit"
                className="sign-up-btn btn btn-primary"
                style={{ verticalAlign: "middle" }}
              >
                <span><Link to="/" className="sign-up-btn-link">Sign-Up</Link></span>
              </button>
            </div>
          </form>
        </div>
        <hr />
        <footer className="sign-up-foot">
          <p id="or">OR</p>
          <p>Do you already have account?<Link to="/Log-In">Log-In</Link></p>
        </footer>
      </div>
    </div>
    </>
  );
};
export default SignUp;
