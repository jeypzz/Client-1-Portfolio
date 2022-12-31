import { motion } from 'framer-motion'

import { SiReverbnation, SiFacebook } from 'react-icons/si'
import { Button } from '../../components'
import { images } from '../../constants'
import './About.scss'

const About = () => {
  const slideFromLeft = {
    whileInView: { x: [-100, 0], opacity: [0, 1] },
    transition: { duration: 1 },
  }

  const slideFromRight = {
    whileInView: { x: [100, 0], opacity: [0, 1] },
    transition: { duration: 1 },
  }

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">Presentation</span>
      <div className="about__container">
        <motion.img
          variants={slideFromLeft}
          whileInView={slideFromLeft.whileInView}
          viewport={{ once: true }}
          src={images.meAbout}
          alt="me at le wagon"
          className="about__img"
          loading="lazy"
        />

        <motion.div
          variants={slideFromRight}
          whileInView={slideFromRight.whileInView}
          viewport={{ once: true }}
          className="about__content"
        >
          <p>
            As a professional hair & makeup artist, I have a passion for enhancing
            natural beauty and helping my clients feel confident and beautiful.
            With years of experience in the industry, I have honed my skills in 
            a variety of makeup techniques, including <strong>airbrush makeup</strong>,
            <strong>contouring</strong>, and <strong>special occasion makeup</strong>.
            I am constantly learning and staying up-to-date on the latest makeup 
            trends and techniques, ensuring that my clients always receive the 
            highest level of service and quality.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">100+</span>
              <span className="about__info-name">
                Satisfied
                <br /> clients
              </span>
            </div>
            <div>
              <span className="about__info-title">50+</span>
              <span className="about__info-name">
                Bridal
                <br /> Weddings
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <Button
              href="https://fabien-chareun.notion.site/fabien-chareun/Fabien-Chareun-Portfolio-b073981572194d799605f39d2544b400"
              target="_blank"
              title="Open my CV"
              logo={<SiReverbnation />}
              className="about__btn"
            />

            <Button
              href="https://www.facebook.com/LynandMakeup"
              target="_blank"
              title="Open my FB Page"
              logo={<SiFacebook />}
              className="about__btn"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
