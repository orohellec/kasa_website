import App from '../App'
import '../assets/styles/HomePage.css'
import Card from '../components/card'

import { useLoaderData } from 'react-router-dom'

const HomePage = () => {
  const housing = useLoaderData();
  // console.log(data)
  return (
    <App>
      <section className="welcome">
        <div className="welcome__content">
          <h1 className="welcome__title">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="housing">
        {housing.map(housing => {
          return <Card key={housing.id} housing={housing} />
        })}
      </section>
    </App>
  )
}

export default HomePage