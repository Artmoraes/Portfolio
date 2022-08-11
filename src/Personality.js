import './App.css';
import Contact from './FunnyPortfolio/Components/Contact';
import Creations from './FunnyPortfolio/Components/Creations';
import AboutMe from './FunnyPortfolio/Components/Languages/About';
import Welcome from './FunnyPortfolio/Components/Welcome';

function Personality() {
  return (
    <div className="App">
      <Welcome />
      <Creations />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default Personality;