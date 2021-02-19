import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

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
      <button onClick={toggleMenu}>
        <i className="far fa-user-circle"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Log out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
