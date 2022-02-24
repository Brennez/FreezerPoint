import React from 'react'
import GlobalStyle from './styles/global'
import { AuthenticationProvider } from './context/authentication'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AuthenticationProvider>
          <Routes></Routes>
        </AuthenticationProvider>
        {/* <Home />
        <Register />
        <RegisterBook /> */}
      </BrowserRouter>
    </>
  )
}

export default App
