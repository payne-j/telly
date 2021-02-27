import { useState } from "react";
import LoginFormModal from "../LoginFormModal";
import ProfilePage from "../ProfilePage/ProfilePage";
import SignupFormModal from "../SignupFormModal";
import DemoButton from "./DemoButton";
import "./Navigation.css";

function DropMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <div className="drop-container">
      <button id="nav-drop" onClick={toggleMenu}>
        <i id="user-icon" className="far fa-user-circle fa-2x"></i>
      </button>
      {showMenu && (
        <ul className="drop-menu">
          <li>
            <LoginFormModal />
          </li>
          <li>
            <SignupFormModal />
          </li>
          <li>
            <DemoButton />
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropMenu;
