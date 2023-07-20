import '../assets/styles/Card.css'

const Card = ({ housing }) => {
  return (
    <article className="card">
      <img
        className="card__image"
        src={housing.cover}
        alt="logement"
      />
      <h2 className="card__title">{housing.title}</h2>
    </article>
  )
}

export default Card