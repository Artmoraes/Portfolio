import { Link } from 'react-router-dom';
import perfil from './png/perfil.jpg';
import './style.css';

function TextWelcome() {
  return (
    <div className="">
      <header>
        <nav className='nav--bar--formal'>
          <ul>
            <li >
              <Link to="/personality" className='link--personality'>
                Other Style
              </Link>
            </li>
            <li>About Me</li>
            <li>Languages</li>
            <li>Works</li>
            <li>Contact</li>
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