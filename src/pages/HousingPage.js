import '../assets/styles/HousingPage.css'
import App from '../App'

import NotFoundPage from './NotFoundPage'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import HostCard from '../components/HostCard'
import WindowDropdown from '../components/WindowDropDown'

import { useLoaderData } from 'react-router-dom'

const HousingPage = () => {
  const housing = useLoaderData()

  if (!housing) {
    return (
      <NotFoundPage />
    )
  }

  return (
    <App>
      <div className="housing__wrapper">
        <Carrousel housing={housing} />
        <div className="housing__content-top">
          <div className="housing__content-left">
            <h1 className="housing__title">{housing.title}</h1>
            <h2 className="housing__location">{housing.location}</h2>
            <h3 className="housing__tags">
              {housing.tags.map((tag, index) =>
                <Tag key={index} text={tag} />
              )}
            </h3>
          </div>
          <div className="housing__content-right">
            <HostCard
              fullname={housing.host.name}
              pictureUrl={housing.host.picture}
              rating={housing.rating}
            />
          </div>
        </div>
        <div className="housing__content-bottom">
          <WindowDropdown title="Description">
            <p>{housing.description}</p>
          </WindowDropdown>
          <WindowDropdown title="Équipements">
            <ul className="housing__equipments">
              {housing.equipments.map((equipment, index) =>
                <li key={index}>{equipment}</li>
              )}
            </ul>
          </WindowDropdown>
        </div>
      </div>
    </App>
  )
}

export default HousingPage