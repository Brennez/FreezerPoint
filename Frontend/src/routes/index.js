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
import US from '../pages/updatePassword'
import UT from '../pages/updatePhone'
import UNL from '../pages/updateBookName'
import UA from '../pages/updateAuthor'
import USL from '../pages/updateSynopsis'
import UCL from '../pages/updateCategory'
import UGL from '../pages/updateGenre'
import UEL from '../pages/updateEdition'
import UIL from '../pages/updateImageUrl'
import Update from '../pages/updateName'
import BookProfile from '../pages/bookProfile'
import BookDeleted from '../pages/bookDeleted'
import BookSearched from '../pages/bookSearched'

// import ControleDeRotas from "./route";

function Routes() {
  return (
    <Switch>
      <ControleRotas path="/" exact component={Login}></ControleRotas>
      <ControleRotas path="/login" exact component={Login}></ControleRotas>
      <ControleRotas path="/createUser" component={Register}></ControleRotas>
      <ControleRotas
        path="/Home"
        isPrivate={true}
        exact
        component={Home}
      ></ControleRotas>
      <ControleRotas
        path="/createBook"
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
        path="/bookSearched"
        isPrivate={true}
        exact
        component={BookSearched}
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
        path="/updatePassword"
        isPrivate={true}
        exact
        component={US}
      ></ControleRotas>
      <ControleRotas
        path="/updatePhone"
        isPrivate={true}
        exact
        component={UT}
      ></ControleRotas>
      <ControleRotas
        path="/updateAuthor/:id"
        isPrivate={true}
        exact
        component={UA}
      ></ControleRotas>
      <ControleRotas
        path="/updateBookName/:id"
        isPrivate={true}
        exact
        component={UNL}
      ></ControleRotas>
      <ControleRotas
        path="/updateSynopsis/:id"
        isPrivate={true}
        exact
        component={USL}
      ></ControleRotas>
      <ControleRotas
        path="/updateCategory/:id"
        isPrivate={true}
        exact
        component={UCL}
      ></ControleRotas>
      <ControleRotas
        path="/updateGenre/:id"
        isPrivate={true}
        exact
        component={UGL}
      ></ControleRotas>
      <ControleRotas
        path="/updateEdition/:id"
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
