import { useState } from 'react'
import React from 'react';
import './calculadora.css'
import { Link } from 'react-router-dom';

function Calculadora() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
     const [resultado, setResultado] = useState("resultado");


    function soma(){
       let soma = Number(num1) + Number(num2);
       setResultado(soma)
    }
    function subtracao(){
      let subtracao = Number(num1) - Number(num2);
      setResultado(subtracao)
   }

   function divisao(){
    let divisao = Number(num1) / Number(num2);
    setResultado(divisao)
 }

 function multiplicacao(){
  let multiplicacao  = Number(num1) * Number(num2);
  setResultado(multiplicacao)
}



return (
    <>
      <h1>Calculadora</h1>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Insira um número"
      />
      &nbsp;
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Insira um número"
      />
      <br/><br/>

      {/* Botões de cálculo */}
      <button onClick={soma}>Soma</button>
      &nbsp;
      <button onClick={subtracao}>Subtração</button>
      &nbsp;
      <button onClick={divisao}>Divisão</button>
      &nbsp;
      <button onClick={multiplicacao}>Multiplicação</button>
      
      <br/><br/>

      {/* Exibindo o resultado */}
      <h2 id="resultado">{resultado}</h2>

      {/* Link para a página inicial */}
      <br/>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </>
  );
};

export default Calculadora;