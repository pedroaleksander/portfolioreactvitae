import React from 'react'
import Filtro from '../../Filtro'
import banco from '../../img/banco.png'
import filme from '../../img/filme.png'
import tesouro from '../../img/tesouro.png'
import platao from '../../img/platao.png'


const Materia1 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', imagem: tesouro, link: 'https://docs.google.com/presentation/d/1Y5w_e5sZLv8gQxFyP292jFLwlENCrObIQczgYQRwAus/edit?usp=sharing' , titulo: ' Caça ao Tesouro Nesta aventura exploraremos a linguagem algébrica enquanto desvendamos enigmas e pistas para encontrar um tesouro escondido. Conectando a matemática a uma historia de aventura. Em minha opinião, achei uma abordagem muito criativa do professor para ensinar, alem de ser divertida, também achei extremamente produtiva para aprender sobre angúlos, pois mtivemos de utilizar bussúla e transferidor. Competência e Habilidade: C2; H5 & H16' },
     
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo: 'Filme Quebrando a Banca, Assistimos ao filme *Quebrando a Banca* e respondemos a perguntas sobre o enredo. Em seguida, desenvolvi uma história utilizando a equação exponencial como tema para um caçador de fenômenos. Essa atividade foi uma forma prática e criativa de aplicar conceitos matemáticos, desenvolvendo a competência C5 e as habilidades H31 e H32.', imagem: filme,  link: 'https://docs.google.com/document/d/16eJzODcblEVyM-M_fhEyH48Q3nBTnAr4O3sUDr3Vk8M/edit?usp=sharing'  },
    { id: 'T2-2',  imagem: banco, link: 'https://docs.google.com/document/d/1NrpZcFBgMZX-gJxV0BuTr6V-cbaaIehkUXMp_n--QxU/edit?usp=sharing', titulo: 'Floriópolis. Recriamos o jogo Banco Imobiliário com novas mecânicas e elementos matemáticos, e apresentamos a nova versão para a turma. A atividade envolveu o desenvolvimento de novas regras e a integração de conceitos matemáticos, promovendo a aplicação prática dos conhecimentos adquiridos. Competência e habilidades trabalhadas: C e H.'},
  
  ],
  'terceiro-trimestre': [
    { id: 'T3-1', titulo: 'Sólidos de Platão. Em grupo, montamos sólidos de platão com palitos de churrasco e jujubas.', imagem: platao,  link: ''  },

    ],
  };
  
 
  return (
    <>


    <div className='matetaticatudo'>
      <Filtro 
        tituloPagina="Trabalhos de Mátematica"
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

export default Materia1;
