import logo from '../assets/images/header_logo.png'
import '../assets/styles/Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__navbar">
        <Link className="header__link" to="/">Accueil</Link>
        <Link className="header__link" to="/a-propos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header