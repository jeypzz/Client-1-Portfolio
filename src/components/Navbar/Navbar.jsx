import { useState } from 'react'

import { BiHomeAlt, BiBriefcaseAlt2, BiMailSend } from 'react-icons/bi'
import {
  AiOutlineUser,
  AiOutlineFileDone,
  AiOutlinePicture,
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai'

import { images } from '../../constants'
import { DarkMode } from '../../components'
import './Navbar.scss'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  // When we click on each nav__link, we remove the show-menu class on mobile
  const closeMenu = () => setToggleMenu(false)
  const navLink = document.querySelectorAll('.nav__link')
  navLink.forEach((n) => n.addEventListener('click', closeMenu))

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('active-link')
      } else {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  const addShadowToNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', addShadowToNavbar)

  return (
    <header className={navbar ? 'header scroll-header' : 'header'} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <div className="nav__logo-container">
            <img src={images.FCLogo} alt="Mon logo fc" />
            Hair & Makeup Artist
          </div>
        </a>
        <div
          className={`nav__menu ${toggleMenu ? 'show-menu' : 'hide-menu'}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <BiHomeAlt className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon" />About
              </a>
            </li>

            <li className="nav__item">
              <a href="#all-projects" className="nav__link">
                <BiBriefcaseAlt2 className="nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileDone className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <BiMailSend className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__btns">
          <DarkMode />
          <div className="nav__toggle" id="nav-toggle">
            {toggleMenu ? (
              <AiOutlineClose
                className="nav__close"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <AiOutlineMenu onClick={() => setToggleMenu(true)} />
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
