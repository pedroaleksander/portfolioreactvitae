import './App.css'
import Nav from './estrutura/Nav'
import Car from './estrutura/Car'
import Vte from './estrutura/Vte'
import Técnico from './estrutura/Materias/Técnico/Técnico'
import Mátematica from  './estrutura/Materias/Matemática/Mátematica'
function App() {
  return (
    <> 
      
     
    <div className="App">
      <Nav />  
    
      <main>
      <section id="ct">
          <h2>Carta</h2>
          <Car /> 
        </section>
        <section id="vt">
          <h2>Curriculo Vitae</h2>
         <Vte />
         
        </section>
        <section id="tc">
          <h2></h2>
        <Técnico />        
        </section>
        <section id="mt">
          <h2> Mátematica </h2>
          <Mátematica />
        </section>
        <section id="nt">
          <h2>Matéria 4</h2>
          <p>Conteúdo da Matéria 4...</p>
        </section>
        <section id="lg">
          <h2>Matéria 5</h2>
          <p>Conteúdo da Matéria 5...</p>
          <section id="pp">
          <h2>Matéria 4</h2>
          <p>Conteúdo da Matéria 6...</p>
        </section>
        <section id="pt">
          <h2>Matéria 4</h2>
          <p>Conteúdo da Matéria 7...</p>
        </section>
      
        </section> 
      </main>
    </div>
    </>
  )
}

export default App
