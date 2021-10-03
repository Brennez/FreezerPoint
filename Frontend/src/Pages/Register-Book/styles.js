import styled from "styled-components";
import bookPage from "../../Assets/bookPage.svg";
import { shade } from "polished";

export const Header = styled.div`
  display: flex;
  align-items: center;
  .logo {
    margin-left: 2rem;
  }
  .exitButton {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 2rem;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 500px;
  margin-right: 5rem;
  margin-top: 5rem;

  h1 {
    color: #9ba0fc;
  }
  .title{
    margin-bottom: 1rem;
  }
  form {
    display: grid;
    gap: 0.5rem;
    h2 {
      color: rgba(32, 32, 40, 0.8);
      font-size: 1.3rem;
    }

    

    button {
      font-family: "Nunito", sans-serif;
      border-radius: 5rem;
      border-color: #9ba0fc;
      border: none;
      outline: none;
      background: #9ba0fc;
      color: white;
      padding: 0.5rem;
      box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
      transition: background 0.2s;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    
    }

    button:hover {
      background: ${shade(0.1, "#9ba0fc")};
    }
`;

export const Image = styled.div`
  background: url(${bookPage}) no-repeat center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
`;
