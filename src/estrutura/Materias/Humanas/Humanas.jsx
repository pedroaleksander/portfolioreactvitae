import React from 'react'
import Filtro from '../../Filtro'
import japao from '../../img/japao.png'
import zim from '../../img/zim.png'
import filme1917 from '../../img/filme1917.png'
import linhadotempo from '../../img/linhadotempo.png'
import jornal from '../../img/jornal.png'
import guerrafria from '../../img/guerrafria.png'
import eravargas from '../../img/eravargas.png'

const Materia4 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', imagem: japao, link: null , titulo: 'Imperialismo Americano. Pesquisei sobre o Japão após a Segunda Revolução Industrial e analisamos a pintura "American Progress". A atividade foi precisa em quesitos de aprendizdado. Com ela, desenvolvi a competência C3 e as habilidades H15 e H16.' },
      { id: 'T1-2', imagem: zim, link: 'https://docs.google.com/document/d/17t6GXcaccm0nMSGLZ7kWL5M1T_A51Rs2UEjSYWrniVk/edit?usp=sharing' , titulo: 'Imperialismo XIX. Pesquisei sobre o Zimbábue, um país colonizado durante a Segunda Revolução Industrial, e participei de debates sobre outros países em sala. Desenvolvi a competência C6 e a habilidade H39.' },
      { id: 'T1-3', imagem: filme1917, link: null , titulo: 'Filme 1917.  Respondemos questões sobre a Primeira Guerra Mundial após assistirmos ao filme 1917 em aula. Achei a abordagem interessante, unindo teoria e um filme informativo. Durante essa atividade, desenvolvi a competência C6 e as habilidades H15 e H16.' },
     
  ],
  'segundo-trimestre': [
    { id: 'T2-1', imagem: linhadotempo, titulo: 'Linha do Tempo da Segunda Guerra.Em grupo, criamos um mapa mental sobre filmes da Segunda Guerra Mundial para entender melhor o contexto histórico, foi uma atividade muito criativa que me possibílitou melhor intendimento da linha do tempo dos acontecimentos. Desenvolvi a competência C6 e as habilidades H36, H39, H40, C2, H7 e H8. ', link: 'https://lucid.app/lucidspark/33fd455b-df4e-404e-a7d7-929aef3c76e7/edit?viewport_loc=1148%2C1376%2C4949%2C2239%2C0_0&invitationId=inv_6887c447-03a4-426a-87ce-ac393722b342' },
    { id: 'T2-2', imagem: jornal, titulo: 'Jornal a Grande Guerra, Elaborei um jornal fictício sobre Berlim após a destruição da Alemanha na Grande Guerra, abordando a situação e a reconstrução do país. A atividade foi divertida e educativa, pois exigiu uma pesquisa aprofundada sobre o tema. Desenvolvi a competência C2 e as habilidades H10, C6 e H39.', link: 'https://www.canva.com/design/DAGB1gScVSE/UwszC0hYPvxJn8FEw0ZGCQ/edit?utm_content=DAGB1gScVSE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'  },
    

    
],
  'terceiro-trimestre': [
    { id: 'T2-1', imagem: guerrafria, titulo: 'Guerra Fria. Criamos uma apresentação sobre a Guerra Fria, explicando a complexidade de conflitos, disputas, guerras, acordos e sentimentos relacionados à Guerra Fria.', link: 'https://www.canva.com/design/DAGSPib5DgI/F_KGkDR08Vfwm8jby61dHg/edit?utm_content=DAGSPib5DgI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { id: 'T2-2', imagem: eravargas, titulo: 'Era Vargas. Retomamos as principais características da República Velha e do período oligárquico.', link: 'https://create.piktochart.com/output/89af61fa90a4-republlica-oligarquica-x-era-vargas?authuser=0'  },

    ],
  };
  
 
  return (
    <>


    <div className='humanastudo'>
      <Filtro 
        tituloPagina="Trabalhos de Humanas"
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

export default Materia4;
