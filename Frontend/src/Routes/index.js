import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../Pages/loginPage'
import Register from '../Pages/registerPage'
import Home from '../Pages/homePage'
import Book from '../Pages/registerBook'
import Profile from '../Pages/profileUser'
import ControleRotas from './route'
import Update from '../Pages/updateNome'
import UE from '../Pages/updateEmail'
import US from '../Pages/updateSenha'

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
  )
}

export default Routes
