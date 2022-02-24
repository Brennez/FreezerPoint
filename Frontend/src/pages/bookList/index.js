import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import deleteIcon from '../../assets/delete.png'

import { Link } from 'react-router-dom'

function BookList() {
  const [data, setData] = useState([])
  const reference = useRef(null)

  useEffect(async () => {
    console.log('teste')

    // Pegando id do usuário
    const response2 = await api.get('searchID')
    const id_user = response2.data['id']

    const response = await api.get(`/searchList/${id_user}`)

    console.log(response)

    // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(book => {
      return {
        id_books: book.id_books,
        name: book.books.name
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
        <ContentForm ref={reference}>
          <h1 className="title"> Meus livros</h1>
          {data.map(item => {
            const { id_books, name } = item
            return (
              <div className="containerName">
                <Link className="nome" to={`/bookProfile/${id_books}`}>
                  <p>{name}</p>
                </Link>
                <div className="icon">
               
                 <Link to={`/bookDeleted/${id_books}`}>
                    <img src={deleteIcon} alt="ícone de deletar." />
                 </Link>
                  <img src={deleteIcon} alt="ícone de deletar." />
                </div>
              </div>
            )
          })}
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default BookList
