import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

import './RecentWork.scss'
import { RepoCard } from '../../components'

const RecentWork = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.github.com/users/fabkaiz/repos?sort=updated',
    }).then((res) => {
      setRepos(res.data)
    })
  }, [])

  const slicedRepos = repos.slice(0, 2)

  const renderRepo = (repo) => (
    <div className="repo__content" key={repo.id}>
      <RepoCard repo={repo} />
    </div>
  )

  const appearing = {
    whileInView: { y: [50, 0], opacity: [0, 1] },
    transition: { duration: 1 },
  }

  return (
    <motion.section
      className="recent section"
      id="recent-work"
      variants={appearing}
      whileInView={appearing.whileInView}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <h2 className="section__title">Recent Projects</h2>
      <span className="section__subtitle">
        My last 2 contributions on Industry
      </span>

      <div className="recent__work-container">
        {slicedRepos.map(renderRepo)}
      </div>
    </motion.section>
  )
}

export default RecentWork
