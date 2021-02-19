import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ username, email, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(["Passwords must match. Please try again."]);
  };

  // //TODO: add hideForm functionality with state
  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   hideForm();
  // };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div>
        <button
          className="signup-form-buttons"
          type="button"
          // onClick={handleCancelClick}
        >
          X
        </button>
        <span>Create an account</span>
      </div>
      <div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      <div>
        <label className="signup-labels">Username</label>
      </div>
      <div>
        <input
          className="signup-inputs"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
      </div>
      <div>
        <label className="signup-labels">Email</label>
      </div>
      <div>
        <input
          className="signup-inputs"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label className="signup-labels">Password</label>
      </div>
      <div>
        <input
          className="signup-inputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>
      <div>
        <label className="signup-labels">Confirm password</label>
      </div>
      <div>
        <input
          className="signup-inputs"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>
      <button className="signup-form-buttons" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignupFormPage;
