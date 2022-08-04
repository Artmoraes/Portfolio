import Projetos from "./projetos/Projetos";

function Creations() {
  return (
    <div className="fade--in distance">
      <h1 id="projetos">Projetos</h1>
      {Projetos()}
    </div>
  );
}

export default Creations;