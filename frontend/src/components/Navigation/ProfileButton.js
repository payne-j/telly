import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  return (
    <>
      <button id="nav-drop" onClick={toggleMenu}>
        <i id="user-icon" className="far fa-user-circle fa-2x"></i>
      </button>
      {showMenu && (
        <ul className="drop-menu">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button id="nav-logout" onClick={logout}>
              log out <i className="fas fa-sign-out-alt"></i>
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
