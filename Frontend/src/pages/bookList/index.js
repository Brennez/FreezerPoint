import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'

import { Link } from 'react-router-dom'

function ProfileBook() {
  const [data, setData] = useState([])
  const referencia = useRef(null)

  useEffect(async () => {
    console.log('teste')
    const response = await api.get('/getLivro')
    setData(response.data)
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
            const { id, nome } = item
            return (
              <div className="containerName">
                <Link to={'/BookProfile'}>
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

export default ProfileBook
