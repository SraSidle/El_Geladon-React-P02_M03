import PaletaLista from "./PaletaLista"; //Parece que se vc for citar o elemnto exportado, tem que declará-lo, junto com a exportação
import "../components/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
} // Todo componente precisa ser exportado e aqui é "className"

export default Home;
