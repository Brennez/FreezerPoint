import styled from 'styled-components'
import image from '../../assets/image.svg'
import { shade } from 'polished'

export const Logo = styled.div`
  .container {
    display: flex;
  }
`
export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 2rem;

  .item {
    margin-right: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.625rem;
    width: 10rem;
    flex: none;
    margin-bottom: 10%;
  }
  /* conteúdo do item */
  .item .conteudoItem {
    display: grid;
    justify-content: center;
  }
  /* Imagem de dentro */
  .item .conteudoItem .imageItem {
    /* width: 100px;
    height:100px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 500px;
  margin-right: 5rem;

  h1 {
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: rgba(32, 32, 40, 0.8);
  }

  h2 {
    color: rgba(32, 32, 40, 0.8);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .tituloDaCategoria {
    margin-top: 1rem;
  }

  .nome {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: #6c70ef;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .categoria {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #6c70ef;
    border: none;
    outline: none;
    background: #6c70ef;
    color: white;
    padding: 0.5rem;
    padding-right: 33%;

    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }

  .contentButton {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  #teste {
    font-family: 'Nunito', sans-serif;
    border-radius: 5rem;
    border-color: #9ba0fc;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: #9ba0fc;
    color: white;
    padding: 0.5rem;
    padding-right: 40%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
    .texto {
      margin-left: 11rem;
    }
  }

  button:hover {
    background: ${shade(0.1, '#9ba0fc')};
  }
`

export const Image = styled.div`
  background: url(${image}) no-repeat center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`
