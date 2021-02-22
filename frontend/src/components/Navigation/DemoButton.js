import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

function DemoButton() {
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };
  return (
    <>
      <button id="demo-btn" className="nav-btn" onClick={login}>
        Demo
      </button>
    </>
  );
}

export default DemoButton;
