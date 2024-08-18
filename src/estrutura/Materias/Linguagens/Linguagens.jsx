import React from 'react'
import Filtro from '../../Filtro'
import insta from '../../img/insta.png'
import pre from '../../img/pre.png'
import revista from '../../img/revista.png'
import redacao from '../../img/redacao.png'
const Materia3 = () => {
  const trabalhos = {
    'primeiro-trimestre': [
      { id: 'T1-1', titulo:'Freedon Rider. Nesta atividade, criamos uma simulação de postagem no Instagram abordando a língua inglesa. Achei extremamente criativa e divertida, pois exigiu pesquisa e consulta em inglês, o que contribuiu para o aprendizado. Desenvolvi as habilidades H11, H25, H10 e H24.', imagem: insta, link: null },
      { id: 'T1-2', titulo:'Pré Modernismo. Realizei uma apresentação sobre o Pré-Modernismo, abordando a análise da obra e a elaboração de uma biografia do autor. A pesquisa aprofundada proporcionou um entendimento mais sólido sobre o período e seus aspectos literários. Desenvolvi as habilidades H15 e H16.', imagem: pre, link: 'https://www.canva.com/design/DAF-EkmY-c4/OW1eq109kQYn2kBYeSLZlg/edit?utm_content=DAF-EkmY-c4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { id: 'T1-3', titulo:'Revista literaria, Para esta atividade, foi solicitada a leitura dos livros *Torto Arado* e *Velhos*. Em seguida, tivemos que criar uma revista literária baseada nas obras. Desenvolvi as habilidades H11, H25, H10 e H24.', imagem: revista, link: null },
      
  ],
  'segundo-trimestre': [
    { id: 'T2-1', titulo:'Redação Online. Competência 1; = 120pts, Competência 2; 160pts, Competência 3; 120pts, Competência 4; 160pts, Competência 5; 120pts, total: 680pts', imagem: redacao, link: '' },
   
  ],
  'terceiro-trimestre': [
    

    ],
  };
  
 
  return (
    <>


    <div className='linguagenstudo'>
      <Filtro 
        tituloPagina="Trabalhos de Linguagens"
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
