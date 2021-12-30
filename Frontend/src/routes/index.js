import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../pages/loginPage'
import Register from '../pages/registerPage'
import Home from '../pages/homePage'
import Book from '../pages/registerBook'
import Profile from '../pages/profileUser'
import ControleRotas from './route'
import bookList from '../pages/bookList'
import UE from '../pages/updateEmail'
import US from '../pages/updateSenha'
import UT from '../pages/updateTelefone'
import Update from '../pages/updateNome'
import BookProfile from '../pages/bookProfile'
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
        path="/book"
        isPrivate={true}
        exact
        component={bookList}
      ></ControleRotas>
      <ControleRotas
        path="/bookProfile"
        isPrivate={true}
        exact
        component={BookProfile}
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
      <ControleRotas
        path="/updateTelefone"
        isPrivate={true}
        exact
        component={UT}
      ></ControleRotas>
    </Switch>
  )
}

export default Routes
