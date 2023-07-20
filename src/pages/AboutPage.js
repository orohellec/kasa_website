import App from '../App'
import '../assets/styles/AboutPage.css'
import WindowDropDown from '../components/WindowDropDown'
import Banner from '../components/Banner'

import aboutData from '../data/aboutpageData'

const AboutPage = () => {
  return (
    <App>
      <Banner title="" image="aboutpage_banner.png" />
      <div className="values">
        {aboutData.map((data, index) => {
          return (
            <WindowDropDown
              key={index}
              title={data.title}
              text={data.text}
            />
          )
        })}
      </div>
    </App>
  )
}

export default AboutPage