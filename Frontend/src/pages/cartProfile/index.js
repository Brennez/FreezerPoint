import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'

import { Link } from 'react-router-dom'

function CartProfile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)

  useEffect(async () => {
    // Pegando id do usuário
    const response2 = await api.get('buscaID')
    const id_user = response2.data['id']

    const response = await api.get(`/getCart/${id_user}`)

    console.log(response)

    // Primeira maneira -> aqui ele já retorna o objeto com formatado
    const result = response.data.map(book => {
      return {
        id_livro: book.id_livro,
        nome: book.livros.nome,
        autor: book.livros.autor,
        imageurl: book.livros.imageurl,
        categoria: book.livros.categoria,
        genero: book.livros.genero
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
            const { autor, id_livro, nome , imageurl,categoria,genero } = item
            return (
              <>
                <div className="containerName">
                  <div className="item">
                    <div className="conteudoItem">
                      <img
                        src={imageurl} className="imageItem"
                      />
                      {/* <img clasname="icon" src={icon} alt="icone fav" /> */}
                    </div>
                  </div>
                  {/* <Link to={`/contactPage/${id_livro}`}> */}
                  <div className="contentContainer">
                    <ul>
                      <li>
                        <div className="containerInfo">
                          Título: <p>{nome}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Por: <p>{autor}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Tipo: <p>{categoria}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Gênero: <p>{genero}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="containerButton">
                    <p>Excluir</p>
                    <p>info</p>
                  </div>
                  {/* </Link> */}
                </div>
              </>
            )
          })}
        </ContentForm>

        {/* <Image></Image> */}
      </Container>
    </>
  )
}

export default CartProfile
