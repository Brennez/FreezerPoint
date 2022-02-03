import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function CartList() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  const { id } = useParams()

  // console.log('AMIGO ESTOU AQUI ' + id)

  useEffect(async () => {
    // Pegando id do usuário
    const response2 = await api.get('buscaID')

    const id_user = response2.data['id']

    const criarCarrinho = await api.post('/createCart', {
      id_user: id_user,
      id_livro: id, 
    })

    const response = await api.get(`/getCart/${id_user}`)


    // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(book => {
      return {
        id_livro: book.id_livro,
        nome: book.livros.nome
      }
    })

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
          <h1 className="title"> Meu carrinho</h1>
          {data.map(item => {
            const { id_livro, nome } = item
            return (
              <div className="containerName">
                <Link to={`/bookProfile/${id_livro}`}>
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

export default CartList
