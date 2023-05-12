import { useEffect } from "react";
import PersonaCard from "../components/PersonaCard";
import { usePersonas } from "../context/PersonaProvider";

function PersonasPage() {
  const { personas, loadPersonas } = usePersonas();

  useEffect(() => {
    loadPersonas();
  }, []);

  function renderMain() {
    if (personas.length === 0) return <h1>No hay Usuarios disponibles</h1>;
    return personas.map((persona) => <PersonaCard persona={persona} key={persona.dni} />);
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default PersonasPage;