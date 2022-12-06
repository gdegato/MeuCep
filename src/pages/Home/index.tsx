import { Link } from 'react-router-dom'
import ProductImg from '../../assets/images/Postman.png'
import './styles.css'

const Home = () => {
  return (
    <div className="home-container">     
        <h1>Quer mandar uma cartinha?</h1>
        <p>Aqui a gente te ajuda a descobrir o endereço rapidinho!</p>    

      <div className="home-image-container">
        <img src={ProductImg} alt="Carro" className="image" />
      </div>
      <Link to="/cepsearch">
        <button className="btn btn-primary btn-lg start-button">Iniciar</button>
      </Link>
    </div>
  )
}

export default Home
