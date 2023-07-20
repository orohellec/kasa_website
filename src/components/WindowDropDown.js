import '../assets/styles/WindowDropDown.css'

const WindowDropdown = ({ title, text }) => {
  return (
    <article className="w-dropdown">
      <div className="w-dropdown__title-wrapper">
        <h3>{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
      <p className="w-dropdown__content">
        {text}
      </p>
    </article>
  )
}

export default WindowDropdown