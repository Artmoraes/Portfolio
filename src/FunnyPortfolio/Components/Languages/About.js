import './cards.css';
import css from './png/css.png';
import html from './png/html.png';
import JavaScript from './png/JavaScript.png';
import logo from './png/logo.svg';
import redux from './png/redux.png';
import './style.css';


function Projects() {
  return (
    <div className='fade--in distance'>
      <h1 id='linguagens'>Linguagens que desenvolvo.</h1>
      <div className='space'>
        <div id="card">
          <div id="name">JavaScript
            <span id="symbol">
              <img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="Icon" /></span>
          </div>
          <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div id="pic">
            <img src={JavaScript} alt="Linguagem" />
          </div>
          <div id="description">
            <h2>[Fiend/Normal]</h2>
            <p>
              A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
            </p>
            <div id="stats">
              ATK / 2500  &nbsp;  DEF / 1200
            </div>
          </div>
        </div>

        <div id="card">
          <div id="name">Redux
            <span id="symbol">
              <img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="Icon" /></span>
          </div>
          <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div id="pic">
            <img src={redux} alt="Linguagem" />
          </div>
          <div id="description">
            <h2>[Fiend/Normal]</h2>
            <p>
              A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
            </p>
            <div id="stats">
              ATK / 2500  &nbsp;  DEF / 1200
            </div>
          </div>
        </div>


        <div id="card">
          <div id="name">HTML5
            <span id="symbol">
              <img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="Icon" /></span>
          </div>
          <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div id="pic">
            <img src={html} alt="Linguagem" />
          </div>
          <div id="description">
            <h2>[Fiend/Normal]</h2>
            <p>
              A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
            </p>
            <div id="stats">
              ATK / 2500  &nbsp;  DEF / 1200
            </div>
          </div>
        </div>

        <div id="card">
          <div id="name">CSS
            <span id="symbol">
              <img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="Icon" /></span>
          </div>
          <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div id="pic">
            <img src={css} alt="Linguagem" />
          </div>
          <div id="description">
            <h2>[Fiend/Normal]</h2>
            <p>
              A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
            </p>
            <div id="stats">
              ATK / 2500  &nbsp;  DEF / 1200
            </div>
          </div>
        </div>

        <div id="card">
          <div id="name">React.JS
            <span id="symbol">
              <img src="https://vignette.wikia.nocookie.net/yugioh/images/d/de/DARK.svg/revision/latest/scale-to-width-down/300?cb=20120918053848" alt="Icon" /></span>
          </div>
          <div id="level">   &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div id="pic">
            <img src={logo} alt="Linguagem" />
          </div>
          <div id="description">
            <h2>[Fiend/Normal]</h2>
            <p>
              A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
            </p>
            <div id="stats">
              ATK / 2500  &nbsp;  DEF / 1200
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;