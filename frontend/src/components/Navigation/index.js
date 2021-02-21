import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let navLinks;
  if (sessionUser) {
    navLinks = <ProfileButton user={sessionUser} />;
  } else {
    navLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="nav-bar">
      <button onClick={() => <Link to="/" />}>
        <i className="fas fa-hotel"></i>
      </button>
      {isLoaded && navLinks}
    </nav>
  );
};

export default Navigation;
