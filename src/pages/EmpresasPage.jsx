import { useEffect } from "react";
import EmpresaCard from "../components/EmpresaCard";
import { useEmpresas } from "../context/EmpresaProvider";

function EmpresasPage() {
  const { empresas, loadEmpresas } = useEmpresas();

  useEffect(() => {
    loadEmpresas();
  }, []);

  function renderMain() {
    if (empresas.length === 0) return <h1>No hay Empresas disponibles</h1>;
    return empresas.map((empresa) => <EmpresaCard empresa={empresa} key={empresa.cuit} />);
  }

  return (
    <div>
      <h1>Empresas</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default EmpresasPage;