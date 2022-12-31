import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ImArrowRight2, ImArrowLeft2 } from 'react-icons/im'
import { motion } from 'framer-motion'

import { ProjectCard } from '../../components'
import { data } from '../../constants'
import './Portfolio.scss'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2400 },
    items: 7,
    slidesToSlide: 4,
  },
  LargeDesktop: {
    breakpoint: { max: 2399, min: 2001 },
    items: 6,
    slidesToSlide: 4,
  },
  desktopFullScreen: {
    breakpoint: { max: 2000, min: 1800 },
    items: 5,
    slidesToSlide: 3,
  },
  smallerdesktop: {
    breakpoint: { max: 1799, min: 1380 },
    items: 4,
    slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1379, min: 1065 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1064, min: 720 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 719, min: 0 },
    items: 1,
  },
}

const CustomLeftArrow = ({ onClick }) => (
  <ImArrowLeft2
    onClick={() => onClick()}
    className="custom-left-arrow carousel__arrow--left"
  />
)
const CustomRightArrow = ({ onClick }) => (
  <ImArrowRight2
    className="custom-right-arrow carousel__arrow--right"
    onClick={() => onClick()}
  />
)

const appearing = {
  whileInView: { opacity: [0, 1] },
  transition: { duration: 1 },
}

const Portfolio = () => {
  return (
    <motion.section
      variants={appearing}
      whileInView={appearing.whileInView}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1 }}
      className="portfolio section dark__bg"
      id="all-projects"
    >
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">List of all my projects</span>

      <div className="carousel__container">
        <Carousel
          autoPlaySpeed={999999}
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          showDots={true}
          renderDotsOutside
        >
          {data?.projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Carousel>
      </div>
    </motion.section>
  )
}

export default Portfolio
