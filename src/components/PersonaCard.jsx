import { usePersonas } from "../context/PersonaProvider";
import { useNavigate } from "react-router-dom";

function PersonaCard({ persona }) {
  const { deletePersona } = usePersonas();
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2>{persona.username}</h2>
      </header>
      <p>{persona.dni}</p>
      <p>{persona.email}</p>
      <p>{persona.create_time}</p>
      <p>{persona.telefono}</p>
      <p>{persona.tipo_persona}</p>
      <p>{persona.empresa}</p>

      <div>
        <button onClick={() => deletePersona(persona.dni)}>Borrar</button>
        <button onClick={() => navigate(`/edpers/${persona.dni}`)}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default PersonaCard;
