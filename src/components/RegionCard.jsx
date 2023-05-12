import { useRegiones } from "../context/RegionProvider";
import { useNavigate } from "react-router-dom";

function RegionCard({ region }) {
  const { deleteRegion } = useRegiones();
  const navigate = useNavigate();
  return (
    <div >
      <header>
        <h2>{region.nombre}</h2>
      </header>
      <p >{region.idregion}</p>
      <div >
        <button
          
          onClick={() => deleteRegion(region.idregion)}
        >
          Borrar
        </button>
        <button
          
          onClick={() => navigate(`/edregs/${region.idregion}`)}
        >
          Editar
        </button>
       
      </div>
    </div>
  );
}

export default RegionCard;