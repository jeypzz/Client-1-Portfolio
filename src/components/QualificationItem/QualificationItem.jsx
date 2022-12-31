import './QualificationItem.scss'

const QualificationItem = ({ year, title, description, className }) => {
  return (
    <div className="qualification__item">
      <div className="qualification__year">
        <h4 className={className}>{year}</h4>
      </div>

      <div className="qualification__name">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default QualificationItem
