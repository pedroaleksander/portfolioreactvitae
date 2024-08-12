import React from 'react';
import '../App.css'
import perfil from "./img/perfil.png"

function car() {
  return (
   <>
   <div className='carta'>
   
   
   <div className="cover-letter-container">
      <div className="cover-letter">
        
        <h1 className="cover-letter-title">Carta de Apresentação</h1>
        <p className="cover-letter-text">
          Prezado(a) Senhor(a),
        </p>
        <p className="cover-letter-text">
          Meu nome é Pedro Aleksander, sou residente em Florianópolis e atualmente tenho 17 anos. Estou cursando Desenvolvimento de Sistemas e tenho a aspiração de me destacar no mercado de trabalho. Estou comprometido em oferecer dedicação e disciplina excepcionais em qualquer área que eu venha a atuar.
        </p>
        <p className="cover-letter-text">
          Sou uma pessoa criativa, com habilidades de comunicação bem desenvolvidas, o que me tem permitido alcançar êxito como vendedor. Tenho um interesse profundo em administração de negócios e vendas, além de ser apaixonado por esportes. Tenho o sonho de participar das Olimpíadas no futuro, em qualquer modalidade.
        </p>
        <p className="cover-letter-text">
          Mantenho uma rotina ativa que inclui um equilíbrio entre estudos e atividades físicas. Vejo o exercício como um hobby produtivo e busco seguir uma alimentação saudável, respeitando metas e princípios pessoais para o meu desenvolvimento contínuo.
        </p>
        <p className="cover-letter-text">
          Agradeço pela consideração e estou à disposição para fornecer informações adicionais ou esclarecer quaisquer dúvidas. Espero a oportunidade de discutir como posso contribuir para sua organização.
        </p>
        <p className="cover-letter-text">
          Atenciosamente,<br />
          Pedro Aleksander
        </p>
      </div>

    </div>
    
    <div className='perfil-box'>
        <img id="perfil" src={perfil} alt="perfil" /> 
    </div>
   
   
  </div>
  </>
  );
}

export default car;