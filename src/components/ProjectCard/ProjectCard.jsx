import { SiFigma, SiGithub } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { Button } from '../../components'
import './ProjectCard.scss'

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard__container">
      <div className="img__container">
        <img src={project.img} loading="lazy" alt="screenshot of the website" />
      </div>

      <div className="ProjectCard__content">
        <h4>{project.title}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: `<p>${project.description} <strong>${project.codeLanguage}.</strong></p>`,
          }}
        />
      </div>

      <div className="project__buttons">
        {project.projectSite && (
          <Button
            href={project.projectSite}
            target="_blank"
            title="Site"
            logo={<CgWebsite />}
            rel="noreferrer"
            className="project__btn"
          />
        )}

        {project.projectRepo && (
          <Button
            href={project.projectRepo}
            target="_blank"
            rel="noreferrer"
            className="project__btn"
            title="Repo"
            logo={<SiGithub />}
          />
        )}

        {project.figmaLink && (
          <Button
            href={project.figmaLink}
            target="_blank"
            title="Figma"
            logo={<SiFigma />}
            rel="noreferrer"
            className="project__btn figma-button"
          />
        )}

        {project.youtubeLink && (
          <Button
            href={project.youtubeLink}
            target="_blank"
            title="Youtube"
            logo={<BsYoutube />}
            rel="noreferrer"
            className="project__btn figma-button"
          />
        )}
      </div>
    </div>
  )
}

export default ProjectCard
