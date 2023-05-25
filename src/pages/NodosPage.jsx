import { useEffect } from "react";
import NodoCard from "../components/NodoCard";
import { useNodos } from "../context/NodoProvider";

function NodosPage() {
  const { nodos, loadNodos } = useNodos();

  useEffect(() => {
    loadNodos();
  }, []);

  function renderMain() {
    if (nodos.length === 0) return <h1>No hay Nodos disponibles</h1>;
    return nodos.map((nodo) => <NodoCard nodo={nodo} key={nodo.idNodo} />);
  }

  return (
    <div>
      <h1>Nodos</h1>
      <div>{renderMain()}</div>
    </div>
  );
}

export default NodosPage;