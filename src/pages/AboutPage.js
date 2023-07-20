import App from '../App'
import WindowDropDown from '../components/WindowDropDown'
import Banner from '../components/Banner'

const AboutPage = () => {
  return (
    <App>
      <Banner title="" image="aboutpage_banner.png" />
      <WindowDropDown
        title="Fiabilité"
        text="Les annonces postées sur Kasa garantissent une fiabilité 
        totale. Les photos sont conformes aux logements, et toutes les informations 
        sont régulièrement vérifiées par nos équipes."
      />
    </App>
  )
}

export default AboutPage