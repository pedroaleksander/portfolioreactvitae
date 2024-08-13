import React from 'react'
import Filtro from '../../Filtro'
import banco from '../../img/banco.png'
import filme from '../../img/filme.png'
import tesouro from '../../img/tesouro.png'


const Materia1 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', imagem: tesouro, link: 'https://docs.google.com/presentation/d/1Y5w_e5sZLv8gQxFyP292jFLwlENCrObIQczgYQRwAus/edit?usp=sharing' , titulo: ' Caça ao Tesouro Nesta aventura exploraremos a linguagem algébrica enquanto desvendamos enigmas e pistas para encontrar um tesouro escondido. Conectando a matemática a uma historia de aventura. Em minha opinião, achei uma abordagem muito criativa do professor para ensinar, alem de ser divertida, também achei extremamente produtiva para aprender sobre angúlos, pois mtivemos de utilizar bussúla e transferidor. Competência e Habilidade: C2; H5 & H16' },
     
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo: 'Filme Quebrando a Banca', imagem: filme,  link: 'https://docs.google.com/document/d/16eJzODcblEVyM-M_fhEyH48Q3nBTnAr4O3sUDr3Vk8M/edit?usp=sharing'  },
    { id: 'T2-2',  imagem: banco, link: 'https://docs.google.com/document/d/1NrpZcFBgMZX-gJxV0BuTr6V-cbaaIehkUXMp_n--QxU/edit?usp=sharing', titulo: 'Floriópolis'},
  ],
  'terceiro-trimestre': [
   

    ],
  };
  
 
  return (
    <>


    <div>
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
