import React, { useContext } from "react";
import { MyContext } from "../context/Mycontext";

export default function Login() {
  const { username, setUsername, password, setPassword, submitUser } =
    useContext(MyContext);
  return (
    <main className="loginCard">
      <h2>Login </h2>
      <br />

      <form onSubmit={submitUser}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
