import '../assets/styles/NotFoundPage.css'
import App from '../App'

import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <App>
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="not-found__redirection" to='/'>Retour à la page d'accueil</Link>
      </div>
    </App>
  )
}

export default NotFoundPage