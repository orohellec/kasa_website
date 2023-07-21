import '../assets/styles/Card.css'

import { Link } from 'react-router-dom'

const Card = ({ housing }) => {
  return (
    <Link to={`/logement/${housing.id}`}>
      <article className="card">
        <div className="card__background"></div>
        <img
          className="card__image"
          src={housing.cover}
          alt="logement"
        />
        <h2 className="card__title">{housing.title}</h2>
      </article>
    </Link>
  )
}

export default Card