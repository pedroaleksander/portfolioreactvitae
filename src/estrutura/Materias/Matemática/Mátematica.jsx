import React from 'react'
import Filtro from '../../Filtro'
import banco from './banco.png'
const Materia1 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo: ' Caça ao Tesouro', imagem: '/imagens/materia1/trabalho1.jpg' },
    { id: 'T1-2', titulo: 'Trabalho 2', imagem: '/imagens/materia1/trabalho2.jpg' },
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo: 'Floriópolis', img: './banco.jpg' },
  ],
  'terceiro-trimestre': [
    { id: 'T3-1', titulo: 'Trabalho 4', imagem: '/imagens/materia1/trabalho4.jpg' },
    { id: 'T3-2', titulo: 'Trabalho 5', imagem: '/imagens/materia1/trabalho5.jpg' },
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
        tituloPagina="Trabalhos de Mátematica"
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
