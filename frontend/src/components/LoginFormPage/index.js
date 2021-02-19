import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";

const LoginFormPage = ({ hideForm }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory;

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) history.push("/");

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

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <button
          className="login-form-buttons"
          type="button"
          onClick={handleCancelClick}
        >
          X
        </button>
        <span>Log in</span>
      </div>
      <div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      <div>
        <label className="login-labels">Username or Email</label>
      </div>
      <div>
        <input
          className="login-inputs"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="login-labels">Password</label>
      </div>
      <div>
        <input
          className="login-inputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-form-buttons" type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginFormPage;
