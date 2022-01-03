import styled, { css } from 'styled-components'

export const Container = styled.div`

  .radio {
    box-sizing: border-box;
    float: left;
    position: relative;
  }

  .radio + .radio {
    margin-left: 25px;
  }

  .radio input[type=radio]:checked {
     color: purple;
    }
`

