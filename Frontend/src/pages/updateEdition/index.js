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

function UpdateEdition() {
  const formReference = useRef(null)
  const { id } = useParams()

  const formSubmit = async data => {
    //Valida dos campos do formulário
    try {
      const scheme = Yup.object().shape({
        edition: Yup.string().required('Você precisa digitar uma edição')
      })
      await scheme.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put(`/updateEdition/${id}`, {
        edition: data.edition
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
            <h2>Edição antiga</h2>
            <p className="edicao" href="">
              {data.edition}
            </p>
            <h2 className="tituloDaEdicao">Novo Edição</h2>
            <Input
              name="edition"
              type="number"
              placeholder="Digite uma nova edição"
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

export default UpdateEdition
