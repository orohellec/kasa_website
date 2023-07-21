import '../assets/styles/Carrousel.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const Carrousel = ({ housing }) => {
  const minIndexValue = 0
  const maxIndexValue = housing.pictures.length - 1

  let [pictureIndex, setPictureIndex] = useState(minIndexValue)

  const changePicture = direction => {
    return (() => {
      if (direction === 'left') {
        switch (pictureIndex) {
          case 0:
            setPictureIndex(maxIndexValue)
            break;
          default:
            setPictureIndex(pictureIndex -= 1)
        }
      }

      if (direction === 'right') {
        switch (pictureIndex) {
          case maxIndexValue:
            setPictureIndex(minIndexValue)
            break
          default:
            setPictureIndex(pictureIndex += 1)
        }
      }
    })
  }

  const onePicture = minIndexValue === maxIndexValue

  let carrouselArrows = null;
  let carrouselPosition = null;

  if (!onePicture) {
    carrouselArrows =
      <div className="carrousel__arrows">
        <FontAwesomeIcon
          className="carrousel__arrow"
          icon={faAngleLeft}
          style={{ color: "white", }}
          size="2xl"
          onClick={changePicture('left')}
        />
        <FontAwesomeIcon
          className="carrousel__arrow"
          icon={faAngleRight}
          style={{ color: "white", }}
          size="2xl"
          onClick={changePicture('right')}
        />
      </div>

    carrouselPosition =
      <span className="carrousel__position">
        {`${pictureIndex + 1} / ${maxIndexValue + 1}`}
      </span>
  }

  return (
    <div className="carrousel">
      <div className="carrousel__background"></div>
      <img
        className="carrousel__image"
        src={housing.pictures[pictureIndex]}
        alt={housing.title}
      />
      {carrouselArrows}
      {carrouselPosition}
    </div>
  )
}

export default Carrousel