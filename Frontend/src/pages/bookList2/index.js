import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import deleteIcon from '../../assets/delete.png'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'


function BookProfile2() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  const { id } = useParams()
  
  useEffect(async () => {
  
    // Pegando id do usuário
    const response2 = await api.get('buscaID')
    const id_user = response2.data['id']

    console.log("ID LIVROS => " + id)

    // Deletando o livro
    const deleteLivroLista = await api.delete(`/deleteLivroLista/${id_user}/${id}`)
    const deleteLivroCarrinho = await api.delete(`/deleteLivroCart/${id_user}/${id}`)
    const deleteLivro = await api.delete(`/deleteLivro/${id}`)
    
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
                <Link className="nome" to={`/bookProfile/${id_livros}`}>
                  <p>{nome}</p>
                </Link>
                <div className="icon">
               
                 <Link to={`/bookList/${id_livros}`}>
                    <img src={deleteIcon} alt="ícone de deletar." />
                 </Link>
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

export default BookProfile2