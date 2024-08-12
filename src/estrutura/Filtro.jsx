import React, { useState } from 'react';
import '../App.css';  // Importe o CSS externo

const Filtro = ({ tituloPagina, opcoesTrimestre, trabalhos }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(opcoesTrimestre[0].value);

  const handleChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  const handleClick = (trabalho) => {
    if (trabalho.link) {
      window.location.href = trabalho.link; // Redireciona para o link especificado
    }
  };

  return (
    <div className="filtro-container">
      <h1>{tituloPagina}</h1>
      
      <select className="filtro-select" value={opcaoSelecionada} onChange={handleChange}>
        {opcoesTrimestre.map(opcao => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
      
      <div className="trabalhos-grid">
        {trabalhos[opcaoSelecionada].length === 0 ? (
          <div className="texto">Ainda não foram feitos trabalhos neste trimestre.</div>
        ) : (
          trabalhos[opcaoSelecionada].map(trabalho => (
            <div 
              key={trabalho.id} 
              className="trabalho-item" 
              onClick={() => handleClick(trabalho)}  // Adiciona o manipulador de clique
            >
              {trabalho.imagem && !trabalho.video && !trabalho.texto && (
                <img src={trabalho.imagem} alt={trabalho.titulo} className="trabalho-imagem" />
              )}
              {trabalho.video && (
                <video src={trabalho.video} controls className="trabalho-video" />
              )}
              {trabalho.texto && (
                <div className="texto">{trabalho.titulo}</div>
              )}
              <div className="trabalho-overlay">
                <div className="trabalho-titulo">{trabalho.titulo}</div>
                {trabalho.descricao && (
                  <div className="trabalho-descricao">
                    {trabalho.descricao}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filtro;
