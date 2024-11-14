import React from 'react'
import Filtro from '../../Filtro'
import evolucao from '../../img/evolucao.png'
import circuito from '../../img/circuito.png'
import pedtroleo from '../../img/petroleo.png'
import revisao from '../../img/revisao.png'
import ecologia from '../../img/ecologia.png'
import copinho from '../../img/copinho.png'
import mapamental from '../../img/mapamental.png'
import pesquisa from '../../img/pesquisa.png'
import ondas from '../../img/ondas.png'
import desequilibrio from '../../img/desequilibrio.png'
import emissoes from '../../img/emissoes.png'
import isotopos from '../../img/isotopos.png'
import listaenem from '../../img/listaenem.png'

const Materia3 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo:'Meme Evolucionismo. Realizei uma atividade divertida que misturou a teoria do evolucionismo de Darwin com um "meme" escolhido por cada aluno relacionado ao tema, criando uma abordagem criativa que foi a minha favorita até agora. Durante essa atividade, apliquei a competência C2 e a habilidade H11.', imagem: evolucao, link: 'https://www.canva.com/design/DAF-u2Z9TjE/3mrMNAWYpBWt_z6oM3F95g/edit?utm_content=DAF-u2Z9TjE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { id: 'T1-2', titulo:'Circuitos. Nessa atividade, aprendemos na prática como funcionam cabos, resistores e energia, montando circuitos e anotando seus valores para responder ao relatório. Gostei muito de poder aplicar na prática, o que foi muito mais envolvente do que apenas estudar a teoria. Durante essa atividade, apliquei as competências C2 e C6, e as habilidades H6 e H34.', imagem: circuito, link: 'https://docs.google.com/document/d/174X7VauOqvvzMTUL-ZVPtQYpN3bFfiPTXYayT6ois5A/edit?usp=sharing' },
      { id: 'T1-3', titulo:'Elementos Quimicos. Em dupla, pesquisamos sobre carbono, petróleo e hidrocarbonetos, o que ajudou a compreender melhor o assunto. Trabalhando juntos, conseguimos tirar dúvidas e finalizar mais rápido. Durante essa atividade, desenvolvi a competência C1 e as habilidades H3, H4 e H5.', imagem: pedtroleo, link: null },
      { id: 'T1-4', titulo:'Genética e Suas Definições. Nessa atividade, fizemos uma lista de conceitos sobre genética e suas definições, o que considero a forma mais fácil de fixar conteúdo. Durante essa atividade, desenvolvi a competência C2 e a habilidade H11.', imagem: revisao, link: 'https://docs.google.com/presentation/d/1ADUSol44wnByTTIAT6P7WBX5IUQlL9RRm1u0nBKGTXg/edit?usp=sharing' },
        
      
  ],
  'segundo-trimestre': [

    { id: 'T2-1', titulo:'Relações Ecologicas. Em grupo, trabalhamos sobre relações ecológicas, explorando e analisando diferentes interações entre organismos. Esse trabalho foi fundamental para aprofundar nossa compreensão do tema. Durante a atividade, desenvolvi a competência C3 e as habilidades H15 e H18.', imagem: ecologia, link: 'https://www.canva.com/design/DAGOJdm2Q9A/5vQnIr-C_BYtsWRGl5iTuw/edit?utm_content=DAGOJdm2Q9A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }, 
    { id: 'T2-2', titulo:'Cartaz. Criei um cartaz de conscientização sobre a não utilização de copos plásticos, destacando a importância de reduzir o uso de materiais descartáveis. Durante essa atividade, desenvolvi a competência C6 e a habilidade H35. ', imagem: copinho, link: 'https://www.canva.com/design/DAGJ4xe4cF8/KSEVSBiC8FRYNLu-bX3UDA/edit?utm_content=DAGJ4xe4cF8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }, 
    { id: 'T2-3', titulo:'Elaborei um mapa mental sobre os componentes dos circuitos elétricos, facilitando a visualização e o entendimento do tema. Durante essa atividade, desenvolvi a competência C6 e a habilidade H35.', imagem: mapamental, link: null }, 
    { id: 'T2-4', titulo:'Pesquisa social. Realizei, como atividade escolhida de autoria, uma pesquisa social onde abordamos características genéticas de cada estudante, como a predisposição à calvície. Durante essa atividade, desenvolvi a competência C2 e a habilidade H11.', imagem: pesquisa, link: 'https://docs.google.com/document/d/17PZjilVdhPsPs4ERY9nqndIMiTHnai3LSRRzkGHMU8w/edit?usp=sharing' }, 
   
  ],
  'terceiro-trimestre': [
    { id: 'T3-1', titulo:'Ondas. Fizemos um resumo de ondas eletromagnéticas no caderno.', imagem: ondas, link: 'https://www.canva.com/design/DAGWdvOKpkQ/69cM9uk3RskNNjWUrEnLMQ/view?utm_content=DAGWdvOKpkQ&utm_campaign=designshare&utm_medium=link&utm_source=editor' }, 
    { id: 'T3-2', titulo:'Desequilíbrio Ambiental. Estudamos casos de desequilíbrio ambiental na natureza.', imagem: desequilibrio, link: 'https://www.canva.com/design/DAGQcmkFCJo/3Fb6-QIBXhTidnESwYx64w/view?utm_content=DAGQcmkFCJo&utm_campaign=designshare&utm_medium=link&utm_source=editor' }, 
    { id: 'T3-3', titulo:'Emissões Radioativas. Criamos uma apresentação sobre emissões radioativas e enriquecimento do urânio. ', imagem: emissoes, link: 'https://www.canva.com/design/DAGPInLTbl8/5UIv32ziQSP11d8Tamfqtg/view?utm_content=DAGPInLTbl8&utm_campaign=designshare&utm_medium=link&utm_source=editor' }, 
    { id: 'T3-4', titulo:'Decaimento Radioativo. Aprendemos sobre Isótopos Radioativos e suas aplicações, abordando as habilidades C5, H24, 25, 26, H27 e H28.', imagem: isotopos, link: 'https://www.canva.com/design/DAGPy4gxsuo/SDKQeAZDv1N44WkFLq7PsQ/view?utm_content=DAGPy4gxsuo&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { id: 'T3-5', titulo:'Lista ENEM - Biotecnologia. Respondemos uma lista de questões do enem para nos preparar.', imagem: listaenem, link: 'https://docs.google.com/document/d/1vv7ZHrPCPKjhJNWkMEgekfnzYAmC2TjsVOcepvSgSNM/edit?usp=sharing' },

    ],
  };
  
 
  return (
    <>


    <div className='naturezatudo'>
     
      <Filtro 
        tituloPagina="Trabalhos de Natureza"
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

export default Materia3;
