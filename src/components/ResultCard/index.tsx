type Props = {
  title: string
  description: string
}

const ResultCard = ({title, description} : Props) => {
  return (
    <div className="result-container">
          <h5 className="result-title">{title}</h5>
          <p className="result-description">{description}</p>
    </div>
  )
}
export default ResultCard;
