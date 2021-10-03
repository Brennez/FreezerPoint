import React from "react";
import { Switch } from "react-router-dom";
import Login from "../Pages/Login-page";
import Register from "../Pages/Register-page";
import Home from "../Pages/Home-page";
import Book from "../Pages/Register-Book";
import Profile from "../Pages/Profile-User";
import ControleRotas from "./route";
import Update from "../Pages/Update-nome";
import UE from "../Pages/Update-Email";
import US from "../Pages/Update-senha";

// import ControleDeRotas from "./route";

function Routes() {
  return (
    <Switch>
      <ControleRotas path="/" exact component={Login}></ControleRotas>
      <ControleRotas path="/login" exact component={Login}></ControleRotas>
      <ControleRotas path="/createUsuario" component={Register}></ControleRotas>
      <ControleRotas
        path="/Home"
        isPrivate={true}
        exact
        component={Home}
      ></ControleRotas>
      <ControleRotas
        path="/createLivro"
        isPrivate={true}
        component={Book}
      ></ControleRotas>
      <ControleRotas
        path="/perfil"
        isPrivate={true}
        component={Profile}
      ></ControleRotas>
      <ControleRotas
        path="/update"
        isPrivate={true}
        exact
        component={Update}
      ></ControleRotas>
      <ControleRotas
        path="/updateEmail"
        isPrivate={true}
        exact
        component={UE}
      ></ControleRotas>
      <ControleRotas
        path="/updateSenha"
        isPrivate={true}
        exact
        component={US}
      ></ControleRotas>
    </Switch>
  );
}

export default Routes;
