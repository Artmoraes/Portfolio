import css from './png/css.png';
import git from './png/git.png';
import html from './png/html.png';
import JavaScript from './png/JavaScript.png';
import jest from './png/jest.png';
import logo from './png/logo.svg';
import redux from './png/redux.png';
import styled from './png/styled-components.png';
import bootstrap from './pngTools/bootstrap.png';
import bulma from './pngTools/bulmaClean.png';
import github from './pngTools/github.png';
import vscode from './pngTools/vscode.png';

import './style.css';

function Linguagens() {
  return (
    <div className='container--languages--tools'>
      <h1 className='title--languages' id='languages'>Linguagens que trabalho.</h1>
      <div className='container--languages--formal'>
        <img src={css} alt="Linguagem" className='languages--formal' />
        <img src={html} alt="Linguagem" className='languages--formal' />
        <img src={JavaScript} alt="Linguagem" className='languages--formal' />
        <img src={logo} alt="Linguagem" className='languages--formal' />
        <img src={redux} alt="Linguagem" className='languages--formal' />
        <img src={styled} alt="Linguagem" className='languages--formal' />
        <img src={jest} alt="Linguagem" className='languages--formal'/>
        <img src={git} alt="Linguagem" className='languages--formal'/>
      </div>

      <h1 className='title--tools'>Ferramentas que utilizo.</h1>
      <div className='container--tools--formal'>
        <img src={bootstrap} alt="ferramentas" className='tools--formal' />
        <img src={bulma} alt="ferramentas" className='tools--formal' />
        {/* <img src={download} alt="ferramentas" className='tools--formal' /> */}
        <img src={github} alt="ferramentas" className='tools--formal' />
        <img src={vscode} alt="ferramentas" className='tools--formal' />
      </div>
    </div>
  );
}

export default Linguagens;