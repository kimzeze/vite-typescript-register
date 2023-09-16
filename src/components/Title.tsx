interface TitleProps {
  type: number
  label: string
  className: string
}

const Title = ({ type, label, className }: TitleProps) => {
  switch (type) {
    case 1:
      return <h1 className={`${className}`}>{label}</h1>
    case 2:
      return <h2 className={`${className}`}>{label}</h2>
    case 3:
      return <h3 className={`${className}`}>{label}</h3>
    case 4:
      return <h4 className={`${className}`}>{label}</h4>
    case 5:
      return <h5 className={`${className}`}>{label}</h5>
    case 6:
      return <h6 className={`${className}`}>{label}</h6>
    default:
      return <h1 className={`${className}`}>{label}</h1>
  }
}

export default Title
