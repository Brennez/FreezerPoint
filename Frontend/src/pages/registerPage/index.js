import React, { useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import { Form } from '@unform/web'
import logo from '../../assets/logo.svg'
import Input from '../../components/input'
import api from '../../services/api'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

// import { Link, useHistory } from "react-router-dom";

function Register() {
  const formReference = useRef(null)
  const history = useHistory()

  const formSubmit = async data => {
    console.log(data)

    //Valida dos campos do formulário
    try {
      const scheme = Yup.object().shape({
        name: Yup.string().required('Você precisa digitar um nome'),
        email: Yup.string()
          .email('Email inválido')
          .required('Você precisa digitar um email'),
        phone: Yup.string()
          .min(9, 'O número precisa ter 9 dígitos')
          .required('Você precisa digitar um número'),

        password: Yup.string()
          .min(6, 'A senha precisa ter no mínimo 6 caracteres')
          .required('Você precisa digitar uma senha')
      })
      await scheme.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const reponse = await api.post('/createUser', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password
      })
      history.push('/Home')
      console.log(reponse.data)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {}
        error.inner.forEach(e => {
          erros[e.path] = e.message
        })
        formReference.current?.setErrors(erros)
      }
    }
  }
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>
      <ContentForm>
        <h1 className="title">Bem vindo!</h1>
        <Form ref={formReference} onSubmit={formSubmit}>
          <p>Preencha seus dados para cadastrar</p>
          <h2>Nome</h2>
          <Input name="name" type="text" placeholder="Nome" />
          <h2>Email</h2>
          <Input name="email" type="text" placeholder="exemplo@gmail.com" />
          <h2>Telefone</h2>
          <Input name="phone" type="number" placeholder="940028922" />
          <h2>Senha</h2>
          <Input name="password" type="password" placeholder="Senha" />
          <button type="submit"> Cadastre-se </button>
          {/* <Link to="/login">
            Ja possuo uma conta
            <FiUpload />
          </Link> */}
          <Link className="loginButton" to="/login">
            {' '}
            Já possuo uma conta
          </Link>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  )
}

export default Register
