import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
    <div className="space--button">
      <Link to='/personality'>
        <button type="button" name='Personality'>Personality</button>
      </Link>
      <Link to='/formal'>
        <button type="button" name='Formal'>Formal</button>
      </Link>    
    </div>
    </div>
  );
}

export default Home;
