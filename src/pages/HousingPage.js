import '../assets/styles/HousingPage.css'
import App from '../App'
import Carrousel from '../components/Carrousel'
import NotFoundPage from './NotFoundPage'

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
      <p>{housing.title}</p>
      <Carrousel housing={housing} />
    </App>
  )
}

export default HousingPage