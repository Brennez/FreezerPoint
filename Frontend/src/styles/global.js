import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

   *{
       margin: 0;
       padding: 0;
       /* box-sizing: border-box; */
   }

   ul, li{
       list-style: none;
   }

   a{
       text-decoration: none;
   }

   body{
       background-color: #DFDDDA;
       font-family: "Overpass", sans-serif;

   }

   body,
   button,
   input {
    font-size: 1rem;
  }

  button{
      cursor: pointer;
  }
  


`;
