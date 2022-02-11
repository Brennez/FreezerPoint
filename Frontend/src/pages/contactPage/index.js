import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editorIcon from '../../assets/editor.svg'
import editor from '../../assets/editor.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function ContactPage() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  const { id } = useParams()

  useEffect(async () => {
    // const response = await api.get(`/getUmLivro/${id}`)

    const response = await api.get(`/getUserId/${id}`)

    const result = response.data.map(user => {
      return {
        nome: user['usuarios'].nome,
        telefone: user['usuarios'].telefone
      }
    })

    console.log(result)

    setData(result)
  }, [])

  // console.log(data.id)

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/cartProfile">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm ref={referencia}>
          <div>
            <h1 className="title">Contato do doador</h1>
            <h2>Nome</h2>
            {data.map(item => {
              const { nome } = item
              return (
                <div className="containerName">
                  <p className="nome" href="">
                    {nome}
                  </p>
                </div>
              )
            })}
            <h2>Telefone</h2>
            {data.map(item => {
              const { telefone } = item
              return (
                <div className="containerName">
                  <p className="nome" href="">
                    {telefone}
                  </p>
                </div>
              )
            })}

            {/* Fim container
             */}
          </div>
        </ContentForm>
        {/* <div className="containerItem">
            <div className="item">
              <div className="conteudoItem">
                <img src={data.imageurl} className="imageItem" />
              </div>
            </div>
          </div> */}
      </Container>
    </>
  )
}

export default ContactPage
