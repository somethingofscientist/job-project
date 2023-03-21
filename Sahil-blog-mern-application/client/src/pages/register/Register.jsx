import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Register</span>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  )
}
