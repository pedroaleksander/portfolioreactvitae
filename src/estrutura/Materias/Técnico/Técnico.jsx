import React from 'react'
import Filtro from '../../Filtro'
const Materia1 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 1, titulo: 'Trabalho 1', imagem: '/imagens/materia1/trabalho1.jpg' },
      { id: 2, titulo: 'Trabalho 2', imagem: '/imagens/materia1/trabalho2.jpg' },
    ],
    'segundo-trimestre': [
      { id: 3, titulo: 'Trabalho 3', imagem: '/imagens/materia1/trabalho3.jpg' },
    ],
    'terceiro-trimestre': [
      { id: 4, titulo: 'Trabalho 4', imagem: '/imagens/materia1/trabalho4.jpg' },
      { id: 5, titulo: 'Trabalho 5', imagem: '/imagens/materia1/trabalho5.jpg' },
    ],
  };

  const customStyles = {
    container: { /* estilos personalizados */ },
    select: { /* estilos personalizados */ },
    grid: { /* estilos personalizados */ },
    item: { /* estilos personalizados */ },
    imagem: { /* estilos personalizados */ },
    overlay: { /* estilos personalizados */ },
    titulo: { /* estilos personalizados */ },
  };

  return (
    <div>
      <Filtro 
        tituloPagina="Trabalhos de Matéria 1"
        opcoesTrimestre={[
          { value: 'primeiro-trimestre', label: 'Primeiro Trimestre' },
          { value: 'segundo-trimestre', label: 'Segundo Trimestre' },
          { value: 'terceiro-trimestre', label: 'Terceiro Trimestre' },
        ]}
        trabalhos={trabalhos}
        customStyles={customStyles}
      />
    </div>
  );
};

export default Materia1;
