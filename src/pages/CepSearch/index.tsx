import ProductImg from '../../assets/images/Postman.png'
import './styles.css'

import { useState } from 'react'
import axios from 'axios'
import ResultCard from '../../components/ResultCard'

type FormData = {
  cep: string
}
type Address = {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  cep: string
}

const CepSearch = () => {
  const [address, setAddress] = useState<Address>()

  const [formData, setFormData] = useState<FormData>({
    cep: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setAddress(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        setAddress(undefined)
        console.log(error)
      })
  }

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>

      <div className="container search-container">
        <p>Digite o número do CEP para confirmar o endereço</p>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {address && (
          <>
            <div className="cep-search-result">
              <img src={ProductImg} alt="Carro" className="image" />

              <div className="text-result">
                <ResultCard
                  title="Logradouro "
                  description={address.logradouro}
                />
                <ResultCard title="Bairro " description={address.bairro} />
                <ResultCard
                  title="Localidade "
                  description={address.localidade}
                />
                <ResultCard title="UF " description={address.uf} />
                <ResultCard title="CEP " description={address.cep} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CepSearch
