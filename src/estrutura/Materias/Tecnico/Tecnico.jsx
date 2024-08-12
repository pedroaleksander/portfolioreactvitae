import React from 'react'
import Filtro from '../../Filtro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Materia2 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo:'S.A - Wireframe de Alta Fidelidade', imagem: '', link: '' },
      { id: 'T1-2', titulo:'S.A - Regra de Negócio', imagem: '', link: '' },
      { id: 'T1-3', titulo:'Calculadora de Horas em react', imagem: '', link: './calculadora/calculadora' },
      { id: 'T1-4', titulo:'API - GitHub', imagem: '', link: '' },
      { id: 'T1-5', titulo:'Trabalho API', imagem: '', link: '' },
      { id: 'T1-6', titulo:'Cenário 1, atividade 1, Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS', imagem: '', link: '' },
      { id: 'T1-7', titulo:'S.A - Regra de Negócio', imagem: '', link: '' },
      
      
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo: 'Sala de Aula Invertida - Metodologias de Desenvolvimento', imagem: '',  link: ''  },
    { id: 'T2-2', titulo:'Lista de Exercícios - Modelo Lógico', imagem: '', link: '' },
    { id: 'T2-3', titulo: 'Modelagem Sistema de Gestão de Consultório', imagem: '',  link: ''  },
    { id: 'T2-4', titulo: 'Filme Quebrando a Banca', imagem: '',  link: ''  },
    { id: 'T2-5', titulo: 'Pesquisa Normalização de dados', imagem: '',  link: ''  }, 
    { id: 'T2-6', titulo: 'Projeto Biblioteca', imagem: '',  link: ''  }, 
  ],
  'terceiro-trimestre': [
    

    ],
  };
  
 
  return (
    <>


    <div>
      <Filtro 
        tituloPagina="Trabalhos do Técnico"
        opcoesTrimestre={[
          { value: 'primeiro-trimestre', label: 'Primeiro Trimestre' },
          { value: 'segundo-trimestre', label: 'Segundo Trimestre' },
          { value: 'terceiro-trimestre', label: 'Terceiro Trimestre' },
        ]}
        trabalhos={trabalhos}
       
      />
    </div>


    </>
  );
};

export default Materia2;
