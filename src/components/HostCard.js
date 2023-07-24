import '../assets/styles/HostCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HostCard = (({ fullname, pictureUrl, rating }) => {
  const words = fullname.split(' ')

  const nStars = parseInt(rating)
  const emptyStars = 5 - rating

  let starsRating = []
  for (let i = 0; i < nStars; i++) {
    starsRating.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: "#FF6060", }}
      />
    )
  }
  for (let i = 0; i < emptyStars; i++) {
    starsRating.push(
      <FontAwesomeIcon
        key={i + nStars}
        icon={faStar}
        style={{ color: "#E3E3E3", }}
      />
    )
  }

  return (
    <article className="host">
      <div className="host__profil">
        <h4 className="host__fullname">
          <span>{words[0]}</span>
          <span>{words[1]}</span>
        </h4>
        <img
          className="host__picture"
          src={pictureUrl}
          alt="hebergeur"
        />
      </div>
      <div className="host__rating">
        {starsRating.map(star => star)}
      </div>
    </article>
  )
})

export default HostCard