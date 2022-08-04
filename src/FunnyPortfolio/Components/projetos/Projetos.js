import construction from './png/em_construcao.png';
import './tv.css';

const renderProjects = () => {
  return <img src={construction} className="project" alt="logo" width="300px" />
}

const renderTV = () => {

  return <body>
    <div className='container'>
      <div className='tv'>
        <label>
          
          <input type="checkbox"></input>
          {renderProjects()}
        </label>

        <div className='speaker'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='slot'></div>
        <div className='antenna'>
          <div className='a'></div>
          <div className='a'></div>
        </div>
        <div className='stand1'></div>
        <div className='stand2'></div>
      </div>
    </div>
  </body>
}

function Projetos() {
  return (
    <div>
      {renderTV()}
      {/* {renderProjects()}
        {renderProjects()}
        {renderProjects()}
        {renderProjects()}
        {renderProjects()}
        {renderProjects()} */}
    </div>
  );
}

export default Projetos;

