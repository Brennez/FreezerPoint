import styled, { css } from 'styled-components'

export const Container = styled.div`

    box-sizing: border-box;

    ${props => {
      if (props.temErro === true) {
        return css`
          width: 100%;
          border-style: solid;
          border-radius: 5rem;
          border-color: red;
          outline: none;
        `
      }
    }}
    
     input {
      width: 100%;
      border-radius: 0.5rem;
      border-style: none;
      border-color: #6c70ef;
      outline: none;
      padding: 0.5rem;
      ::placeholder {
        color: #c8d3f9;
        size: 1.5rem;
      }
`

export const Erro = styled.div`
  color: red;
  font-family: 'Nunito', sans-serif;
`
