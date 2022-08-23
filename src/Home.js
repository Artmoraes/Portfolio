import { Link } from 'react-router-dom';
import './App.css';
import './Home.css'

function Home() {
  return (
    <div className="App bodyColor">
      <h1>Home</h1>
      <div className="space--button">
        <section>
          <Link to='/personality'>
            <button type="button" name='Personality' className='button--personality'>
              <span>
                Personality
              </span>
            </button>
          </Link>
        </section>
        <section>
          <Link to='/formal'>
            <button type="button" name='Formal'  className='button--formal'>
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text">Formal</span>            
            </button>
          </Link>    
        </section>
      </div>
    </div>
  );
}

export default Home;
