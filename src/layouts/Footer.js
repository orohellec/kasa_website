import '../assets/styles/Footer.css'
import logo from '../assets/images/footer_logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt="logo" className='footer__logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer