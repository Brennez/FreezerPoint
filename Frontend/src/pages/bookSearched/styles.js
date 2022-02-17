import styled from 'styled-components'
import image from '../../assets/image.svg'

export const Logo = styled.div`
  .container {
    display: flex;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 2rem;
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

  .containerName {
    display: flex;
  }

  .icon {
    margin-left: 0.5rem;
    width: 15px;
    height: 1rem;
  }


  .nome{
    font-family: 'Nunito', sans-serif;
    border-color: #6c70ef;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: #aba59c;
    border-radius: 0.5rem;
    color: black;
    padding: 0.5rem;
    padding-right: 50%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }
`

export const Image = styled.div`
  background: url(${image}) no-repeat center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`
