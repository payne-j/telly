import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let navLinks;
  if (sessionUser) {
    navLinks = <ProfileButton user={sessionUser} />;
  } else {
    navLinks = (
      <>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && navLinks}
      </li>
    </ul>
  );
};

export default Navigation;
