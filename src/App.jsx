{/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/}


import './App.css'

import Header from './components/header/header.jsx' // Importação Header (teste)
import Main from './components/main/main.jsx' // Importação Main (teste)
import Footer from './components/footer/footer.jsx' // Importação Footer (teste)
import Card from './components/card/card.jsx' // Importação Card (teste)
import Login from './components/login/login.jsx' // Importação Login (teste)
import List from './components/list/list.jsx' // Importação List (teste)
import Contador from './components/contador/contador.jsx' // Importação Contador (teste)
import ContadorCaracter from './components/contadorCaracter/contadorCaracter.jsx' // Importação Contador de Caracteres (teste)
import Store from './components/store/store.jsx' // Importação Store (teste) (PROJETO FINAL)

function App() {
  {/*const [count, setCount] = useState(0)8*/}

  return (
    <>

    {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}

      {/*
      <Header /> 
      <Main /> 
      <Footer />  
      <Card />
      <Login />
      <List />
      <Contador />
      <ContadorCaracter />
      */}

      <Store />
    </>
  )
}

export default App
