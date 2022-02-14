import React, { useState, useEffect, useRef } from 'react'
import { Container, Center, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'


function BookDeleted() {
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
              <div className="containerName">
                <div className="center">
                  O livro foi excluído com sucesso
                </div>        
              </div>
      </Container>
    </>
  )
}

export default BookDeleted
