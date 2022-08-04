import ContactMe from "./Contact/ContactMe";

function Contact() {
  return (
    <div className="fade--in distance">
      <h1 id="contact">Bora trocar uma ideia</h1>
      {ContactMe()}
    </div>
  );
}

export default Contact;