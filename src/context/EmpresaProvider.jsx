import { createContext, useContext, useState } from "react";
import { EmpresaContext } from "./EmpresaContext";
import {
  getEmpresasRequest,
  deleteEmpresaRequest,
  createEmpresaRequest,
  getEmpresaRequest,
  updateEmpresaRequest,
} from "../api/empresas.api";


export const useEmpresas = () => {
  const context = useContext(EmpresaContext); //HAY QUE CREARLO COMO ESTA PARA USAR EL CONTEXTO PARA TODOS POR EL BUG DE VITE.
  if (context === undefined) {
    throw new Error("useEmpresas must be used within a EmpresaContextProvider");
  }
  return context;
};

export const EmpresaContextProvider = ({ children }) => {
  const [empresas, setEmpresas] = useState([]);

  async function loadEmpresas() {
    const response = await getEmpresasRequest();
    setEmpresas(response.data);
  }

  const deleteEmpresa = async (id) => {
    try {
      const response = await deleteEmpresaRequest(id);
      setEmpresas(empresas.filter((empresa) => empresa.cuit !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createEmpresa = async (empresa) => {
    try {
      await createEmpresaRequest(empresa);
      
    } catch (error) {
      console.error(error);
    }
  };

  const getEmpresa = async (id) => {
    try {
      const response = await getEmpresaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmpresa = async (id, newFields) => {
    try {
      const response = await updateEmpresaRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <EmpresaContext.Provider
      value={{
        empresas,
        loadEmpresas,
        deleteEmpresa,
        createEmpresa,
        getEmpresa,
        updateEmpresa,
      }}
    >
      {children}
    </EmpresaContext.Provider>
  );
}; 