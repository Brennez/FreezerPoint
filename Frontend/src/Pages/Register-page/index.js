import React, { useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import { Form } from "@unform/web";
import logo from "../../Assets/logo.svg";
import Input from "../../components/input";
import api from "../../services/api";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

// import { Link, useHistory } from "react-router-dom";

function Register() {
  const formularioReferencia = useRef(null);
  const history = useHistory();
  const submeterFormulario = async (data) => {
    console.log(data);

    //Valida dos campos do formulário
    try {
      const esquema = Yup.object().shape({
        nome: Yup.string().required("Você precisa digitar um nome"),
        email: Yup.string()
          .email("Email inválido")
          .required("Você precisa digitar um email"),
        senha: Yup.string()
          .min(6, "A senha precisa ter no mínimo 6 caracteres")
          .required("Você precisa digitar uma senha"),
      });
      await esquema.validate(data, { abortEarly: false });

      //Faz a requisição da api e grava no banco de dados
      const reponse = await api.post("createUsuario", {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      });
      history.push("/Home");
      console.log(reponse.data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {};
        error.inner.forEach((e) => {
          erros[e.path] = e.message;
        });
        console.log(erros);
        formularioReferencia.current?.setErrors(erros);
      }
    }
  };
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>
      <ContentForm>
        <h1 className="title">Bem vindo!</h1>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <p>Preencha seus dados para cadastrar</p>
          <h2>Nome</h2>
          <Input name="nome" type="text" placeholder="Nome" />
          <h2>Email</h2>
          <Input name="email" type="text" placeholder="exemplo@gmail.com" />
          <h2>Senha</h2>
          <Input name="senha" type="password" placeholder="Senha" />
          <button type="submit"> Cadastre-se </button>
          {/* <Link to="/login">
            Ja possuo uma conta
            <FiUpload />
          </Link> */}
          <Link className="loginButton" to="/login">
            {" "}
            Já possuo uma conta
          </Link>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Register;
