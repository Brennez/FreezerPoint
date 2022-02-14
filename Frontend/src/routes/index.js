import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../pages/loginPage'
import Register from '../pages/registerPage'
import Home from '../pages/homePage'
import Book from '../pages/registerBook'
import Profile from '../pages/profileUser'
import cartList from '../pages/cartList'
import cartProfile from '../pages/cartProfile'
import ControleRotas from './route'
import contactPage from '../pages/contactPage'
import bookList from '../pages/bookList'

import UE from '../pages/updateEmail'
import US from '../pages/updateSenha'
import UT from '../pages/updateTelefone'
import UNL from '../pages/updateNomeLivro'
import UA from '../pages/updateAutor'
import USL from '../pages/updateSinopse'
import UCL from '../pages/updateCategoria'
import UGL from '../pages/updateGenero'
import UEL from '../pages/updateEdicao'
import UIL from '../pages/updateImageUrl'
import Update from '../pages/updateNome'
import BookProfile from '../pages/bookProfile'
import BookDeleted from '../pages/bookDeleted'
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
        path="/bookDeleted/:id"
        isPrivate={true}
        exact
        component={BookDeleted}
      ></ControleRotas>
      <ControleRotas
        path="/cartList/:id"
        isPrivate={true}
        exact
        component={cartList}
      ></ControleRotas>
       <ControleRotas
        path="/cartProfile"
        isPrivate={true}
        exact
        component={cartProfile}
      ></ControleRotas>
      <ControleRotas
        path="/contactPage/:id"
        isPrivate={true}
        exact
        component={contactPage}
      ></ControleRotas>
      <ControleRotas
        path="/bookProfile/:id"
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
      <ControleRotas
        path="/updateAutor/:id"
        isPrivate={true}
        exact
        component={UA}
      ></ControleRotas>
      <ControleRotas
        path="/updateNomeLivro/:id"
        isPrivate={true}
        exact
        component={UNL}
      ></ControleRotas>
      <ControleRotas
        path="/updateSinopse/:id"
        isPrivate={true}
        exact
        component={USL}
      ></ControleRotas>
      <ControleRotas
        path="/updateCategoria/:id"
        isPrivate={true}
        exact
        component={UCL}
      ></ControleRotas>
      <ControleRotas
        path="/updateGenero/:id"
        isPrivate={true}
        exact
        component={UGL}
      ></ControleRotas>
      <ControleRotas
        path="/updateEdicao/:id"
        isPrivate={true}
        exact
        component={UEL}
      ></ControleRotas>
      <ControleRotas
        path="/updateImage/:id"
        isPrivate={true}
        exact
        component={UIL}
      ></ControleRotas>
    </Switch>
  )
}

export default Routes
