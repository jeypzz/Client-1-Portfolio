import './Button.scss'

const Button = ({ href, title, logo, target, className }) => {
  return (
    <a href={href} className={`button ${className}`} target={target}>
      {title} {logo}
    </a>
  )
}

export default Button
