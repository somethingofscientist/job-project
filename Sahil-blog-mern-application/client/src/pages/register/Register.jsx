import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
const proxy = "http://localhost:4000/api"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(proxy + "/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }
    catch (err) {
      setError(true)
    }
  }

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>

        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={e => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="registerButton"

        >Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>

      {error && <span style={{fontWeight:"bold", color: "red", textAlign: "center" }}>
        Something Went Wrong ...  <br />Or May Be This Account Already Registered In Our Database
      </span>}
    </div>
  )
}
