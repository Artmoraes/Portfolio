import React from "react";
import CardWelcome from "../../CardWelcome";
import logo from '../logo.svg';
import avatar from '../png/avatar.png';
import pcBinario from '../png/codigo-binario.png';
import JBSuit from '../png/Jhonny Bravo Encostado.png';
import JBApontando from '../png/Jhonny-Bravo-apontando.png';
import macho from '../png/macho.png';
import robo from '../png/robo.png';
import setaDown from "../png/setaDown.png";
import '../StyleWelcome.css';

const navBarWelcome = () => {
  return (
    <nav className="nav--bar">
      <section className="section--logo">
        <img src={logo} className="App-logo item--react-logo" alt="logo" />
      </section>
      <section className="icons--navBar">
        <img src={avatar} alt="Avatar" className="item--icon" />
        <img src={pcBinario} alt="Avatar" className="item--icon" />
        <img src={macho} alt="Avatar" className="item--icon" />
        <img src={robo} alt="Avatar" className="item--icon" />
      </section>
    </nav>
  );
}

const titleWelcome = () => {
  return (<h1>Bem-Vindo ao meu portfólio_</h1>);
};

const CardLetsGoBlock = () => {
  return (
    <div>
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
        <img src={JBApontando} alt="Jhonny Bravo Apontando" className="JB--Apontando" width="400px" />
      </div>
      <div className="contentWelcome--CardWelcome">
        <CardWelcome />
      </div>
      <div className="contentWelcome--LetsGo">
        {CardLetsGoBlock()}
      </div>
    </div>
  );
};

function Welcome () {
    return (
      <>
        {navBarWelcome()}
        {titleWelcome()}
        {contentWelcome()}
      </>
    );
}

export default Welcome;