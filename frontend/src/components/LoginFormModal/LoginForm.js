import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";

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
    <>
      <button className="cancel-btn">
        <i className="far fa-times-circle"></i>
      </button>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div id="login-errors">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <div className="title">Log in</div>
          <div>
            <input
              type="text"
              className="login-input"
              placeholder="     username | email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div>
            <input
              type="password"
              className="login-input"
              placeholder="            password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button id="login-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
