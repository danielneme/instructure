import { createContext, useContext, useState } from "react";
import { NodoContext } from "./NodoContext";
import {
  getNodosRequest,
  deleteNodoRequest,
  createNodoRequest,
  getNodoRequest,
  updateNodoRequest,
} from "../api/nodos.api";


export const useNodos = () => {
  const context = useContext(NodoContext); //HAY QUE CREARLO COMO ESTA PARA USAR EL CONTEXTO PARA TODOS POR EL BUG DE VITE.
  if (context === undefined) {
    throw new Error("useNodos must be used within a NodoContextProvider");
  }
  return context;
};

export const NodoContextProvider = ({ children }) => {
  const [nodos, setNodos] = useState([]);

  async function loadNodos() {
    const response = await getNodosRequest();
    setNodos(response.data);
  }

  const deleteNodo = async (id) => {
    try {
      const response = await deleteNodoRequest(id);
      setNodos(nodos.filter((nodo) => nodo.idNodo !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createNodo = async (nodo) => {
    try {
      await createNodoRequest(nodo);
      
    } catch (error) {
      console.error(error);
    }
  };

  const getNodo = async (id) => {
    try {
      const response = await getNodoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateNodo = async (id, newFields) => {
    try {
      const response = await updateNodoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <NodoContext.Provider
      value={{
        nodos,
        loadNodos,
        deleteNodo,
        createNodo,
        getNodo,
        updateNodo,
      }}
    >
      {children}
    </NodoContext.Provider>
  );
}; 