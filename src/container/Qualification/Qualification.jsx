import { motion } from 'framer-motion'

import { data } from '../../constants'
import { QualificationItem } from '../../components'
import './Qualification.scss'

const Qualification = () => {
  return (
    <section className="qualification section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle qualification__description">
        My skills and professional background
      </span>

      <div className="qualification__container">
        <div className="skills__content">
          {data?.skills?.map((skill) => (
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="skill__item"
              key={skill.name}
            >
              <div className="skill__logo">
                <img src={skill.logo} loading="lazy" alt="skill logo" />
                <p>{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="qualification__content">
          {data?.qualification?.map((qualification) => (
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={qualification.title}
            >
              <QualificationItem
                year={qualification.year}
                title={qualification.title}
                description={qualification.description}
                key={qualification.title}
                className={qualification.className}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualification
