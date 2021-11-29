import React, { useState } from "react";
import { useLogin} from "../hooks/useLogin"

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="loginbtn">
        <span>Login</span>
      </button>
      {isPending && (
        <button className="loginbtn" disabled>
          <span disabled>loading</span>
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
