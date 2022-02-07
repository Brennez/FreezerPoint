import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
// import info from '../../assets/in'

import { Link } from 'react-router-dom'

function BookProfile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)

  useEffect(async () => {
    console.log('teste')

    // Pegando id do usuário
    const response2 = await api.get('buscaID')
    const id_user = response2.data['id']

    const response = await api.get(`/searchLista/${id_user}`)

    console.log(response)

    // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(book => {
      return {
        id_livros: book.id_livros,
        nome: book.livros.nome
      }
    })

    console.log(result)

    setData(result)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/Home">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm ref={referencia}>
          <h1 className="title"> Meus livros</h1>
          {data.map(item => {
            const { id_livros, nome } = item
            return (
              <div className="containerName">
                <Link to={`/bookProfile/${id_livros}`}>
                  <p>{nome}</p>
                </Link>
              </div>
            )
          })}
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default BookProfile
