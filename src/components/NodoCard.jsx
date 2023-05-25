import { useNodos } from "../context/NodoProvider";
import { useNavigate } from "react-router-dom";

function NodoCard({ nodo }) {
  const { deleteNodo } = useNodos();
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2>{nodo.nombre}</h2>
      </header>
      <p>{nodo.idNodo}</p>
      <p>{nodo.tipoNodo}</p>
      <p>{nodo.cantRacks}</p>
      <p>{nodo.cantRacks_disp}</p>
      <p>{nodo.fechaPreventivo}</p>
      <p>{nodo.periocidadPreventivo}</p>
      <p>{nodo.idRegiones}</p>

      <div>
        <button onClick={() => deleteNodo(nodo.idNodo, nodo.idRegiones)}>Borrar</button>
        <button onClick={() => navigate(`/ednodo/${nodo.idNodo}`)}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default NodoCard;
