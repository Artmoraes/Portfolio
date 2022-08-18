import './App.css';
import Contact from './Formal/Components/Contact/Contact';
import Linguagens from './Formal/Components/Languages/Linguagens';
import Projetos from './Formal/Components/Projects/Projects';
import Welcome from './Formal/Components/Welcome/Welcome';

function Formal() {
  return (
    <div className="box--formal body--formal">
      <Welcome />
      <Linguagens />
      <Projetos />
      <Contact />
    </div>
  );
}

export default Formal;
