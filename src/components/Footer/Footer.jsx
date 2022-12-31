import {BsFacebook, BsLinkedin} from 'react-icons/bs';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="dark__bg">
      <div className="footer__container grid">

        <div className="footer__name">
          <h1 className="footer__title">Lyn</h1>
          <span className="footer__subtitle">Hair & Makeup Artist</span>
        </div>

        <ul className="footer__links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#recent-work">Recent project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/LynandMakeup" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
          <a href="https://www.linkedin.com/in/fabien-chareun/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer