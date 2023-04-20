import React, { useEffect, useState } from "react";

import "./Login.css";
const  Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    console.log(email, password)
  }
  
  return (
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label>
          <span>email: </span>
          <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </label>
        <label>
          <span>password: </span>
          <input
          type="password"
          onChange={(e) => setPassword(e.target.password)}
          value={password}
          />
        </label>
        <button className="btn">Login</button>
      </form>
    )
}
export default Login;