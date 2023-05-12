import { useEffect } from "react";
import RegionCard from "../components/RegionCard";
import { useRegiones } from "../context/RegionProvider";

function RegionesPage() {
  const { regiones, loadRegiones } = useRegiones();

  useEffect(() => {
    loadRegiones();
  }, []);

  function renderMain() {
    if (regiones.length === 0) return <h1>No hay regiones disponibles</h1>;
    return regiones.map((region) => <RegionCard region={region} key={region.idregion} />);
  }

  return (
    <div>
      <h1>Regiones</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default RegionesPage;