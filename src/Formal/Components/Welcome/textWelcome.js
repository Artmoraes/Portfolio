import { Link } from 'react-router-dom';
import perfil from './png/perfil.jpg';
import './style.css';

function TextWelcome() {
  return (
    <div className="container--all--content">
      <header>
        <nav className='nav--bar--formal'>
          <ul>
            <li >
              <Link to="/personality" className='link--personality'>
                Outro Estilo
              </Link>
            </li>
            <a href="#languages" target="_parent">
              <li>{`Linguagens & Ferramentas`}</li>
            </a>
            <a href="#works" target="_parent">
              <li>Trabalhos</li>
            </a>
            <a href="#contact" target="_parent">
              <li>Contato</li>
            </a>

          </ul>
        </nav>
      </header>
      <div className='container--about--formal'>
        <img src={perfil} alt='perfil' className='photo' width="300px" />
        <section className='about--infos'>
          <h2>Olá, me chamo Arthur. Prazer em têr você aqui!</h2>
          <p>
            What is Lorem Ipsum?!
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TextWelcome;