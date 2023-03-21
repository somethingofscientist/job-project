import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
