import { useState } from "react";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function DropMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <div className="drop-menu">
      <button id="drop-btn" onClick={toggleMenu}>
        <i className="far fa-user-circle fa-2x"></i>
      </button>
      {showMenu && (
        <div>
          <ul className="profile-dropdown">
            <li>
              <LoginFormModal />
            </li>
            <li>
              <SignupFormModal />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropMenu;
