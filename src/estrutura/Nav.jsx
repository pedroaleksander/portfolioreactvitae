// src/components/nav.js
import React from 'react';
import '../App.css'
import zap from "./img/zap.png"
import link from "./img/link.jpeg"
import git from "./img/git.png"
import gmail from "./img/gmail.png"


function nav() {
  return (
 <nav className="nav">
        <ul className="nav-links">
          <li><a href="#pt" className="logo">Portfólio</a></li>
          <li><a href="#ct">Carta de Apresentação</a></li>
          <li><a href="#vt">Currículo Vitae</a></li>
          <li><a href="#tc">Técnico</a></li>
          <li><a href="#mt">Matemática</a></li>
          <li><a href="#nt">Natureza</a></li>
          <li><a href="#hm">Humanas</a></li>
          <li><a href="#lg">Linguagens</a></li>
          <li><a href="#pp">PPE</a></li>
          <li><a href="#ex">Extras</a></li> 
          <li className="nav-icons">
          <a href="https://github.com/pedroaleksander" target="_blank" rel="noopener noreferrer">
            <img id="github" src={git} alt="GitHub" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=DmwnWrRrlqwNpcdzgDsTjmXSQHcnsmnDwkWXxJTDRwrZzWWJpwZWWVvBJmzgzDvrQdmbMTgvzdsG" target="_blank" rel="noopener noreferrer">
            <img id="gmail" src={gmail} alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/pedro-aleksander-153398302/" target="_blank" rel="noopener noreferrer">
            <img id="linkedin" src={link} alt="LinkedIn" />
          </a>
          <a href="https://Wa.me/+55(48)991082248" target="_blank" rel="noopener noreferrer">
            <img id="whatsapp" src={zap} alt="WhatsApp" />
          </a>
       
        </li>
        </ul>  
            
</nav>

    
  );
}

export default nav;