import React from 'react'
import './App.css'
import Portfolio from './estrutura/Portfolio'
import Nav from './estrutura/Nav'
import Car from './estrutura/Car'
import Vte from './estrutura/Vte'
import Tecnico from './estrutura/Materias/Tecnico/Tecnico'
import Mátematica from  './estrutura/Materias/Matematica/Matematica'
import Natureza from './estrutura/Materias/Natureza/Natureza'
import Humanas from './estrutura/Materias/Humanas/Humanas'
import Linguagens from './estrutura/Materias/Linguagens/Linguagens'

function App() {
  return (
    <> 
      
     
    <div className="App">
      <Nav />  
      <main>
      <section id="pt">
      <Portfolio/>
      </section>
      <section id="ct">
          <Car /> 
        </section>
        <section id="vt">
         <Vte />
        </section>
        <section id="tc">
          <h2></h2>
        <Tecnico />        
        </section>
        <section id="mt">
          <Mátematica />
        </section>
        <section id="nt">
          <Natureza/>
        </section>
        <section id="hm">
        <Humanas/>
        </section>
        <section id="lg">
        <Linguagens/>
          <section id="pp">
          <h2>PPE</h2>
          <p>Em construção, volte mais tarde</p>
        </section>
        <section id="pt">
          <h2>Extras</h2>
          <p>primeiros portfolios...</p>
        </section>
      
        </section> 
      </main>
    </div>
    </>
  )
}

export default App
