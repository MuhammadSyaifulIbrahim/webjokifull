import React from "react";
import "../../style/LoginForm.css";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="back-link">
        <Link to={"/"}>
          <FaArrowLeft className="back-icon" />
        </Link>
      </div>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <Link to={"/home"}>
          <button type="submit">Login</button>
        </Link>

        <div className="register-link">
          <Link to={"/register"}>Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
