import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import api from '../services/api'

function ControleRotas({ isPrivate = false, component: Component, ...rest }) {
  const user = localStorage.getItem('@freezerPoint:usuario')
  const token = localStorage.getItem('@freezerPoint:token')
  api.defaults.headers.authorization = `Bearer ${token}`
  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/Home'
            }}
          />
        )
      }}
    ></Route>
  )
}

export default ControleRotas
