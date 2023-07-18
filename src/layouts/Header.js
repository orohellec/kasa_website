import logo from '../assets/images/header_logo.png'
import '../assets/styles/Header.css'
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive, isPending }) => {
  const linkClass = 'header__link'
  return (
    isActive ? `${linkClass} header__link--active` : linkClass
  )
}

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="logo" className="header__logo" />
        <nav className="header__navbar">
          <NavLink
            className={activeLink}
            to="/">Accueil
          </NavLink>
          <NavLink
            className={activeLink}
            to="/a-propos">
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header