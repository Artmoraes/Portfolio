function contats() {
  return (
    <fieldset className="forms">
      <label className='contacts'>
        <h3>Meios para contato:</h3>
        <p>Telefone: {`(81) 99395-8789`}</p>
        <p>Email: {`ArthurBarrosDev@gmail.com`}</p>
      </label>
    </fieldset>
  );
}

function form() {
  return (
    <>
      <fieldset className="form">
          <form className='contactMe--Form'>
            <label className='contactMe--Name'>
              <input type="text" placeholder='Nome' name="nome" required className='contactMe--Input form-control'></input>
              <input type="text" placeholder='Sobrenome' name="sobrenome" required className='contactMe--Input2 form-control last--name'></input>
            </label>
            <label className='contactMe--Label'>
              <input type="email" placeholder='Email' name="email" required className='contactMe--Others--Input form-control'></input>
            </label>
            <label className='contactMe--Label'>
              <input type="tel" placeholder='Contato' name="telefone" className='contactMe--Others--Input form-control'></input>
            </label>
            <textarea rows="4" col="50" placeholder='Mensagem' required className='contactMe--Text form-control'></textarea>
            <input type="submit" value="Enviar" className='submit--buton' name='Enviar'></input>
          </form>
      </fieldset>
    </>
  );
}

function Contact() {
  return (
    <div className="body">
      {contats()}
      {form()}
    </div>
  );
}

export default Contact;