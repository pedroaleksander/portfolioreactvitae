import React from 'react';
import pfc from  "./img/pfc.png"
import '../App.css'


function Vit() {
  return (
   <div className="caixa-vitae">
    <div className="vitae-tudo">
      <header className="vitae-cabeçalio">

        <img  src={pfc} className="pfc" alt="pfc.png" />
        
        <div className="cabeçalio-details">
          <h1>Pedro Aleksander</h1>
          <p>Administração</p>
        </div>
      </header>
      <section className="contact-info">
        <h2>Informações de Contato</h2> 
        <p>Telefone: (48) 99910-82248</p>
        <p>Email: pedro_aa_silva@estudante.senai.org.br</p>
        <p>Endereço: Av. Luiz Boiteux Piazza, 4565 - Florianópolis, Santa Catarina, Brasil</p>
      </section>
      <section className="objective">
        <h2>Objetivo</h2>
        <p>Tenho como objetivo o crescimento pessoal e a busca pelo profissionalismo. Busco me destacar entre os demais, colocando em prática meu conhecimento sobre Tecnologia da Informação e empreendedorismo, vejo um futuro próspero. Junto a isso, meu crescimento profissional de acordo com meus objetivos.</p>
      </section>
      <section className="education">
        
        <div className="school">
          <h3>Escola Sesi Senai</h3>
          <p>Técnico em desenvolvimento de sistemas, integrado ao ensino médio.</p>
          <p>Início em 01/2022</p>
          <p>Conclusão em andamento.</p>
        </div>
      </section>
      <section className="experiencias">
        <h2>Experiências</h2>
        <div className="job">
          <p>08/05/2017 - 22/09/2019: Vendedor ambulante.</p>
          <p>Área de atuação: Vendas Presenciais.</p>
          <p>Atividade: Revenda de produtos.</p>
          <p>Duração: 2 anos.</p>
          <p>Renda média: 300R$-800R$ mensais.</p>
        </div>
        <div className="job">
          <p>24/04/2019 - 31/03/2024: Empreendedor digital.</p>
          <p>Área de atuação: Vendas Online.</p>
          <p>Atividade: Compra e venda.</p>
          <p>Duração: 3 anos.</p>
          <p>Renda média: 800R$-3.000R$ mensais.</p>
        </div>
      </section>
      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Boa Comunicação</li>
          <li>Persuasão</li>
          <li>Proatividade</li>
          <li>Resiliência</li>
          <li>Disciplina</li>
        </ul>
      </section>
    </div>
  </div>
  );
}

export default Vit;
