import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App space--button">
      <h1>Home</h1>
      <Link to='/personality'>
        <button type="button" name='Personality'>Personality</button>
      </Link>
      <Link to='/formal'>
        <button type="button" name='Formal'>Formal</button>
      </Link>
    </div>
  );
}

export default Home;
