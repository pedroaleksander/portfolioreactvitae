import React from 'react'
import Filtro from '../../Filtro'
import kanban from '../../img/kanban.png'
import logico from '../../img/logico.png'
import consultorio from '../../img/consultorio.png'
import normalizacao from '../../img/normalizacao.png'
import autafid from '../../img/autafid.png'
import regras from '../../img/regras.jpg'
import api from '../../img/api.png'
import apicep from '../../img/apicep.png'
import calculadora from '../../img/calculadora.png'
import analise from '../../img/analise.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Materia2 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo:'S.A - Wireframe de Alta Fidelidade, Desenvolvi um projeto Warframe de um site de alta fidelidade para um lar de idosos, organizando as funcionalidades e a interface para garantir uma navegação intuitiva e eficiente. Nesse processo, apliquei as habilidades H3, H5 e H8.', imagem: autafid, link: 'https://www.figma.com/proto/D7dPtkzVaOhkISQ3cGpUXg/Wireframe-Alta-Fidelidade-SA?node-id=1105-1912&t=SowCMJoyrAFN1ZdW-1&scaling=scale-down&content-scaling=fixed&page-id=292%3A11637&starting-point-node-id=1105%3A1912&share=1' },
      { id: 'T1-2', titulo:'S.A - Regra de Negócio. Desenvolvi um trabalho sobre Regra de Negócio, abordando elementos funcionais e não funcionais, estruturando o conteúdo para garantir clareza e eficácia. Durante essa atividade, apliquei as habilidades H2, H3, H4 e H8.', imagem: regras, link: 'https://docs.google.com/document/d/1kRe0cl5PQmwFDuKNH5SI9A8CIaDzs8_xUTUm9tBi0x0/edit?usp=sharing' },
      { id: 'T1-3', titulo:'Calculadora de Horas em react. Desenvolvi uma calculadora em React, estruturando o código para garantir a funcionalidade e a usabilidade. Durante essa atividade, apliquei a habilidade H. ' , imagem: calculadora, link: 'https://github.com/pedroaleksander/calculadoraReact.git' }, /*falta arrumar o diretorio para ao clicar redirecioner para a calculadora*/ 
      { id: 'T1-4', titulo:'API - GitHub. Desenvolvi uma API que busca perfis no GitHub, estruturando as funcionalidades para garantir a eficiência na recuperação de dados. Durante essa atividade, apliquei a habilidade H.', imagem: api, link: 'https://github.com/pedroaleksander/ApiGithub.git' },
      { id: 'T1-5', titulo:'Trabalho API. Desenvolvi, em sala de aula, uma API que busca CEP, estruturando as funcionalidades para garantir uma busca rápida e precisa. Durante essa atividade, apliquei as habilidades H3, H4, H5, H6, H9 e H10.', imagem: apicep, link: 'https://github.com/pedroaleksander/apicep.git' },
      { id: 'T1-6', titulo:'Cenário 1, atividade 1, Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS', imagem: analise, link: 'https://docs.google.com/document/d/1ZYUHdmIEHAgsprpo8WLXD2ZwIQiPVgV0KhT5S3uQzZw/edit?usp=sharing' },
     
      
      
  ],
  'segundo-trimestre': [

    { id: 'T2-1', titulo: 'Sala de Aula Invertida - Metodologias de Desenvolvimento. Realizei em grupo, um trabalho de sala de aula invertida", onde ensinei sobre a metodologia Kanban, estruturando a apresentação para facilitar o aprendizado e a compreensão do tema. Durante essa atividade, apliquei as habilidades H3, H5 e H8.', imagem: kanban,  link: 'https://www.canva.com/design/DAGNpwl1lEQ/Kdb2xOV3Gdx22-X7oqqyOQ/edit?utm_content=DAGNpwl1lEQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'  },                
    { id: 'T2-2', titulo:'Lista de Exercícios - Modelo Lógico, Desenvolvi o modelo lógico de um hotel, estruturando dados essenciais para garantir a eficiência do sistema e a organização das operações. Nesse processo, apliquei as habilidades H1 e H2. ', imagem: logico, link: 'https://docs.google.com/presentation/d/1-bd2lWfWvKDxuhcFYLseMhLiewmx-r0GPpdsgq1cHbw/edit?usp=sharing' },
    { id: 'T2-3', titulo: 'Modelagem Sistema de Gestão de Consultório Desenvolvi o modelo lógico e conceitual de um consultório médico, organizando dados como informações de pacientes, médicos e consultas para assegurar a eficiência e a organização do sistema. Esse trabalho me permitiu aplicar as habilidades H1 e H2.', imagem: consultorio,  link: 'https://www.canva.com/design/DAGNskds2JY/D93w2cjOcJLU5JyJ1FAT2g/edit?utm_content=DAGNskds2JY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'  },
    { id: 'T2-4', titulo: 'Pesquisa Normalização de dados', imagem: normalizacao,  link: 'https://docs.google.com/document/d/1yE4Xk7xk9WcjxVyZEJoUtUyAlU7eXtxBx59UUHwWX5g/edit?usp=sharing'  }, 
    { id: 'T2-5', titulo: 'Projeto Biblioteca', imagem: analise,  link: ''  }, 
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
