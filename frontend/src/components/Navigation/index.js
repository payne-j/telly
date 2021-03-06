import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import BookingsButton from "./BookingsButton";
import DropMenu from "./DropMenu";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  let navLinks;
  if (sessionUser) {
    navLinks = <BookingsButton user={sessionUser} />;
  } else {
    navLinks = (
      <>
        <DropMenu />
      </>
    );
  }

  return (
    <nav className="nav-bar">
      <button
        id="home-btn"
        className="nav-btn"
        onClick={() => history.push("/")}
      >
        <i className="fas fa-hotel fa-2x"></i>
      </button>
      <span className='nav-title'>telly</span>
      {isLoaded && navLinks}
    </nav>
  );
};

export default Navigation;
