import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import LoginFormModal from "./LoginFormModal.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div id="login-errors">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div id="login-title">Log in</div>
        <div>
          <label className="login-label">Username or Email</label>
        </div>
        <div>
          <input
            type="text"
            className="login-input"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label className="login-label">Password</label>
        </div>
        <div>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button id="login-btn" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
