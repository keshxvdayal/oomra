import "./Header.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import exitIcon from "./../../assets/icons/exit.svg";
import hamburgerMenuIcon from "./../../assets/icons/hamburger-menu.svg";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img
          className="header__logo-icon"
          src={lotusLogo}
          alt="vector icon of a lotus flower"
        />
        <span>
          oom<span className="logo__title--coral">mra</span>
        </span>
      </NavLink>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <img src={exitIcon} alt="exit icon" />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
