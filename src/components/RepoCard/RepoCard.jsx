import { useRef } from 'react'

import './RepoCard.scss'

const RepoCard = ({ repo }) => {
  const languageRef = useRef(repo.language)

  const capitalizeWords = (string) => {
    // Remove '-' characters of the repo name
    const cleanString = string.replace(/-/g, ' ')
    // Return the name with all words capitalized
    return cleanString.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase()
    })
  }

  if (languageRef.current === null) repo.language = 'Readme'

  return (
    <div className="repo__container">
      <h2 className="repo__title">{capitalizeWords(repo.name)}</h2>
      <p>{repo.description}</p>

      <div className="repo__buttons">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Visit Site
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer">
            Voir le site
          </a>
        )}
      </div>

      <div className="line" />

      <span
        className={`repo__language-tag ${languageRef.current}`}
        ref={languageRef}
      >
        {repo.language}
      </span>
    </div>
  )
}

export default RepoCard
