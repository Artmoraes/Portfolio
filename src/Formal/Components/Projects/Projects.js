import construction from './png/em_construcao.png';

function Projetos() {
  const renderProjects = () => {
    return <>
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
      <img src={construction} className="" alt="logo" width="200px" />
    </>
  }

  return (
    <body>
      <div className=''>
        <h1>Meus trabalhos recentes</h1>
        {renderProjects()}
      </div>
    </body>
  );
}

export default Projetos;

