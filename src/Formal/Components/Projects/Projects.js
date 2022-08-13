import construction from './png/em_construcao.png';
import './style.css';

function Projetos() {
  const renderProjects = () => {
    return <div className='projects--formal'>
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
      <img src={construction} className="unity--project--formal" alt="logo" width="200px" />
    </div>
  }

  return (
    <body>
      <div className='container--projects--formal'>
        <h1 className='tittle--projects--formal'>Meus trabalhos recentes</h1>
        {renderProjects()}
      </div>
    </body>
  );
}

export default Projetos;

