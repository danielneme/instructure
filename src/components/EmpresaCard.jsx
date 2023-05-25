import { useEmpresas } from "../context/EmpresaProvider";
import { useNavigate } from "react-router-dom";

function EmpresaCard({ empresa }) {
  const { deleteEmpresa } = useEmpresas();
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2>{empresa.nombre}</h2>
      </header>
      <p>{empresa.cuit}</p>
      <p>{empresa.telefono}</p>
      <p>{empresa.correo}</p>
      <p>{empresa.tipo}</p>
      <p>{empresa.direccion}</p>
      <p>{empresa.provincia}</p>
      <p>{empresa.ciudad}</p>
      <p>{empresa.codigoPostal}</p>

      <div>
        <button onClick={() => deleteEmpresa(empresa.cuit)}>Borrar</button>
        <button onClick={() => navigate(`/edempr/${empresa.cuit}`)}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default EmpresaCard;
