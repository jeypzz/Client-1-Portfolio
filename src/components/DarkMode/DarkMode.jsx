import './DarkMode.scss'
import { FiSun, FiMoon } from 'react-icons/fi'

const setDark = () => {
  localStorage.setItem('theme', 'dark')
  document.documentElement.setAttribute('data-theme', 'dark')
  window.setTimeout(() => {
    const lightIcon = document.querySelector('.light-icon')
    const darkIcon = document.querySelector('.dark-icon')

    lightIcon.classList.remove('active-theme')
    darkIcon.classList.add('active-theme')
  }, 100)
}

const setLight = () => {
  localStorage.setItem('theme', 'light')
  document.documentElement.setAttribute('data-theme', 'light')
  setTimeout(() => {
    const lightIcon = document.querySelector('.light-icon')
    const darkIcon = document.querySelector('.dark-icon')

    darkIcon.classList.remove('active-theme')
    lightIcon.classList.add('active-theme')
  }, 100)
}

const storedTheme = localStorage.getItem('theme')

const prefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark)

defaultDark ? setDark() : setLight()

const toggleTheme = (e) => {
  e.target.checked ? setDark() : setLight()
}

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>
        <FiSun className="light-icon" />
      </span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>
        <FiMoon className="dark-icon" />
      </span>
    </div>
  )
}

export default DarkMode
