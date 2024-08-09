import React, { useState } from 'react';

const Filtro = ({ tituloPagina, opcoesTrimestre, trabalhos, customStyles }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(opcoesTrimestre[0].value);

  const handleChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <div className="filtro-container" style={customStyles.container}>
      <h1>{tituloPagina}</h1>
      
      <select className="filtro-select" value={opcaoSelecionada} onChange={handleChange} style={customStyles.select}>
        {opcoesTrimestre.map(opcao => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
      
      <div className="trabalhos-grid" style={customStyles.grid}>
        {trabalhos[opcaoSelecionada].map(trabalho => (
          <div key={trabalho.id} className="trabalho-item" style={customStyles.item}>
            <img src={trabalho.imagem} alt={trabalho.titulo} className="trabalho-imagem" style={customStyles.imagem} />
            <div className="trabalho-overlay" style={customStyles.overlay}>
              <div className="trabalho-titulo" style={customStyles.titulo}>{trabalho.titulo}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtro;
