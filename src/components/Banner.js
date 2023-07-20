import '../assets/styles/Banner.css'

const bannerTitle = (title) => {
  if (title) {
    return (
      <h1 className="banner__title">{title}</h1>
    )
  }
}

const Banner = ({ title, image }) => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(/${image})` }}
    >
      <div className="banner__content">
        {bannerTitle(title)}
      </div>
    </section>
  )
}

export default Banner;