import { useState } from 'react';
import construction from './png/em_construcao.png';
import './tv.css';

function Projetos() {
  const [test, setTest] = useState();

  const renderProjects = () => {
    return <>
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
      <img src={construction} className="project" alt="logo" />
    </>
  }

  return <body>
    <div className='container'>
      <div className='tv'>
        <label>
          <input type="checkbox" value={test} onClick={() => setTest(!test)}></input>
          <div className='screen'>
            {test ? renderProjects() : ''}
          </div>
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

export default Projetos;

