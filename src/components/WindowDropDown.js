import '../assets/styles/WindowDropDown.css'
import { useState } from 'react'

const WindowDropdown = ({ title, text }) => {
  const [visible, setVisible] = useState(true);

  const hideShowContent = () => {
    setVisible(prev => !prev)
  }

  return (
    <article className="w-dropdown">
      <div className="w-dropdown__title-wrapper" onClick={hideShowContent}>
        <h3>{title}</h3>
        {visible ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-up"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg> :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        }
      </div>
      {visible ?
        <p className="w-dropdown__content">
          {text}
        </p> :
        null
      }

    </article>
  )
}

export default WindowDropdown