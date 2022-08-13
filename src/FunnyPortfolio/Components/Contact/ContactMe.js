import batman from './png/batman.gif';
import github from './png/github.png';
import linkedin from './png/linkedin.png';

import './style.css';
import './submit.css';


function contats() {
  return (
    <fieldset className="forms">
      <img src={batman} alt="Avatar" className='contactMe--Batman'></img>

      {/* <img src={perfil} alt="Minha foto de rosto" className='contactMe--Perfil'></img> */}
      <label className='contacts'>
        <h3>Meios para contato:</h3>
        <p>Telefone: {`(81) 99395-8789`}</p>
        <p>Email: {`ArthurBarrosDev@gmail.com`}</p>
      </label>
      <section className='redes--sociais--personality'>
        <a href='https://github.com/Artmoraes' >
          <img src={github} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/arthurbarrosdeveloper/' >
          <img src={linkedin} alt='github' />
        </a>
      </section>
    </fieldset>
  );
}

// function form() {
//   return (
//     <>
//       <fieldset className="form">
//           <form className='contactMe--Form'>
//             <label className='contactMe--Name'>
//               <input type="text" placeholder='Nome' name="nome" required className='contactMe--Input form-control'></input>
//               <input type="text" placeholder='Sobrenome' name="sobrenome" required className='contactMe--Input2 form-control last--name'></input>
//             </label>
//             <label className='contactMe--Label'>
//               <input type="email" placeholder='Email' name="email" required className='contactMe--Others--Input form-control'></input>
//             </label>
//             <label className='contactMe--Label'>
//               <input type="tel" placeholder='Contato' name="telefone" className='contactMe--Others--Input form-control'></input>
//             </label>
//             <textarea rows="4" col="50" placeholder='Mensagem' required className='contactMe--Text form-control'></textarea>
//             <input type="submit" value="Enviar" className='submit--buton' name='Enviar'></input>
//           </form>
//       </fieldset>
//     </>
//   );
// }

function ContactMe() {
  return (
    <div className="body">
      {contats()}
      {/* {form()} */}
    </div>
  );
}

export default ContactMe;