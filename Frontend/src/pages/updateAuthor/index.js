import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/input'
import left from '../../assets/left.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UpdateAuthor() {
  const formReference = useRef(null)
  const { id } = useParams()

  const formSubmit = async data => {
    //Valida dos campos do formulário
    try {
      const scheme = Yup.object().shape({
        author: Yup.string().required('Você precisa digitar um autor')
      })
      await scheme.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put(`/updateAuthor/${id}`, {
        author: data.author
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
    const response = await api.get(`/getABook/${id}`)
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to={`/bookProfile/${id}`}>
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm>
          <Form ref={formReference} onSubmit={formSubmit}>
            <h1 className="title">Editar</h1>
            <h2>Autor antigo</h2>
            <p className="autor" href="">
              {data.author}
            </p>
            <h2 className="tituloAutor">Novo Autor</h2>
            <Input
              name="author"
              type="text"
              placeholder="Digite o nome do autor"
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

export default UpdateAuthor
