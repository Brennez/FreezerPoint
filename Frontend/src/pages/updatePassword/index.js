import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import left from '../../assets/left.png'

function UpdatePassword() {
  const formReference = useRef(null)

  const formSubmit = async data => {
    //Valida dos campos do formulário
    try {
      const scheme = Yup.object().shape({
        newPassword: Yup.string()
          .min(6, 'A senha precisa ter no mínimo 6 caracteres')
          .required('Você precisa digitar uma senha'),
        oldPassword: Yup.string()
          .min(6, 'A senha sprecisa ter no mínimo 6 caracteres')
          .required('Você precisa digitar uma senha')
      })
      await scheme.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put('/updatePassword', {
        newPassword: data.oldPassword,

        newPassword: data.newPassword
      })
      //Atuliza a pagina
      window.location.reload()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {}
        error.inner.forEach(e => {
          erros[e.path] = e.message
        })
        console.log(erros)
        formReference.current?.setErrors(erros)
      }
    }
  }

  //pegando os dados do backend
  const [data, setData] = useState([])
  useEffect(async () => {
    const response = await api.get('/searchID')
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/perfil">
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm>
          <Form ref={formReference} onSubmit={formSubmit}>
            <h1 className="title">Editar</h1>

            <h2 className="tituloEmail">Senha antiga</h2>
            <Input
              name="oldPassword"
              type="password"
              placeholder="Digite sua senha"
            />

            <h2 className="tituloEmail">Nova senha</h2>
            <Input
              name="newPassword"
              type="password"
              placeholder="Digite sua senha"
            />
            <div className="contentButton">
              <button type="submit" className="botao" id="teste">
                {' '}
                <p className="texto">Aplicar</p>
              </button>
            </div>
          </Form>
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default UpdatePassword
