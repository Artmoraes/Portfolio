import React from "react";
import CardWelcome from "../../CardWelcome";
import '../fade-in.css';
import logo from '../logo.svg';
import avatar from '../png/avatar.png';
import pcBinario from '../png/codigo-binario.png';
import JBSuit from '../png/Jhonny Bravo Encostado.png';
import JBApontando from '../png/Jhonny-Bravo-apontando.png';
import boneco from "../png/macho.png";
import robo from '../png/robo.png';
import setaDown from "../png/setaDown.png";

import '../StyleWelcome.css';

const navBarWelcome = () => {
  return (
    <nav className="nav--bar">
      <section className="section--logo">
        <img src={logo} className="App-logo item--react-logo" alt="logo React" title="Este site foi feito em React.js" />
      </section>
      <section className="icons--navBar">
        <a href="#formal" target="_parent" title="Ir para o portfólio formal">
          <img src={avatar} alt="Avatar" className="formalIMG" />
        </a>
        <a href="#projetos" target="_parent" title="Projetos realizados">
          <img src={pcBinario} alt="Avatar" className="item--icon" />
        </a>
        <a href="#linguagens" target="_parent" title="Tecnologias que utilizo">
          <img src={boneco} alt="Avatar" className="item--icon" />
        </a>
        <a href="#contact" target="_parent" title="Contatos">
          <img src={robo} alt="Avatar" className="item--icon" />
        </a>
      </section>
    </nav>
  );
}

const titleWelcome = () => {
  return (<h1 className="fade--in" style={{'margin-top': '20px'}}>Bem-Vindo ao meu portfólio</h1>);
};

const CardLetsGoBlock = () => {
  return (
    <div className="slideRight">
      <div className="Card--LetsGo">
        <h1>Bora lá?!</h1>
        <img src={JBSuit} alt="Jhonny Bravo de terno" className="JB--Suit" width="400px" />
      </div>
      <div className="setaBaixo--block">
        <img src={setaDown} alt="Seta para baixo" className="setaBaixo" />
      </div>
    </div>
  );
};

const contentWelcome = () => {
  return (
    <div className="contentWelcome">
      <div className="contentWelcome--img">
        <img src={JBApontando} alt="Jhonny Bravo Apontando" className="JB--Apontando fade--in" width="400px" />
      </div>
      <div className="contentWelcome--CardWelcome fade--in">
        <CardWelcome />
      </div>
      <div className="contentWelcome--LetsGo">
        {CardLetsGoBlock()}
      </div>
    </div>
  );
};

function Welcome() {
  return (
    <>
      {navBarWelcome()}
      {titleWelcome()}
      {contentWelcome()}
    </>
  );
}

export default Welcome;