import App from '../App'
import '../assets/styles/HomePage.css'
import Banner from '../components/Banner'
import Card from '../components/Card'

import { useLoaderData } from 'react-router-dom'

const HomePage = () => {
  const housing = useLoaderData();

  return (
    <App>
      <Banner title="Chez vous, partout et ailleurs" image="homepage_banner.png" />
      <section className="housing">
        {housing.map(housing => {
          return <Card key={housing.id} housing={housing} />
        })}
      </section>
    </App>
  )
}

export default HomePage