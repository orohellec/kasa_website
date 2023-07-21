import '../assets/styles/Carrousel.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carrousel = () => {
  return (
    <div className="carrousel">
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "white", }} />
    </div>
  )
}

export default Carrousel