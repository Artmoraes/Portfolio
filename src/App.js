import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Formal from './Formal';
import Home from './Home';
import Personality from './Personality';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/personality" exact>
          <Personality />
        </Route>

        <Route path="/formal" exact>
          <Formal />
        </Route>
    </BrowserRouter>
  );
}

export default App;
