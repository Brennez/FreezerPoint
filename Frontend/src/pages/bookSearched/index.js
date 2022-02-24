import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentBook, Image, Logo , Body } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams , useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

function BookSearched() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  var nome = '';
  const MyTest = () => {
    const search = useLocation().search;
    nome = new URLSearchParams(search).get("mySearch");
  }

  MyTest()
  
  useEffect(async () => {

    const response = await api.get(`/searchBook/${nome}`)

    console.log(response.data)

    // // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(book => {
      return {
        id: book.id,
        nome: book.nome,
        autor: book.author,
        imageurl: book.imageurl
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
          <Body>
            
          <h1 className="title">Livros encontrados</h1>
          <ContentBook ref={referencia}>
          {data.map(item => {
            const { id, author, name, imageurl } = item
            return (
              <div className="item">
                <div className="conteudoItem">
                  <img src={imageurl} className="imageItem" />
                  <div className="info">
                    <p className="titulo"> {name}</p>
                    <p className="autor"> {author}</p>
                    <div className="botao">
                      <Link to={`/cartList/${id}`}>Adicionar</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}{' '}
          {/* =========== FECHAMENTO DO MAP ============ */}
        </ContentBook>
          </Body>

      </Container>
    </>
  )
}

export default BookSearched
