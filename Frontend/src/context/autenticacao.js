import React, { createContext, useContext } from "react";
import api from "../services/api";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  const login = async ({ email, senha }) => {
    try {
      const response = await api.post("login", {
        email: email,
        senha: senha,
      });
      console.log("ok");
      const { token, usuario } = response.data;

      localStorage.setItem("@freezerPoint:token", token);
      localStorage.setItem("@freezerPoint:usuario", JSON.stringify(usuario));
      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const logoff = () => {
    localStorage.removeItem("@freezerPoint:token");
    localStorage.removeItem("@freezerPoint:usuario");
  };

  return (
    <ContextoAutenticacao.Provider value={{ login, logoff }}>
      {/* <h1>teste</h1> */}
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export function useContextAutenticacao() {
  const context = useContext(ContextoAutenticacao);

  if (!context) {
    throw new Error("Não foi possível usar o contexto");
  }

  return context;
}
