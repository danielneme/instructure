import { createContext, useContext, useState } from "react";
import { RegionContext } from "./RegionContext";
import {
  getRegionesRequest,
  deleteRegionRequest,
  createRegionRequest,
  getRegionRequest,
  updateRegionRequest,
} from "../api/regiones.api";


export const useRegiones = () => {
  const context = useContext(RegionContext); //HAY QUE CREARLO COMO ESTA PARA USAR EL CONTEXTO PARA TODOS POR EL BUG DE VITE.
  if (context === undefined) {
    throw new Error("useRegiones must be used within a RegionContextProvider");
  }
  return context;
};

export const RegionContextProvider = ({ children }) => {
  const [regiones, setRegiones] = useState([]);

  async function loadRegiones() {
    const response = await getRegionesRequest();
    setRegiones(response.data);
  }

  const deleteRegion = async (id) => {
    try {
      const response = await deleteRegionRequest(id);
      setRegiones(regiones.filter((region) => region.idregion !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createRegion = async (region) => {
    try {
      await createRegionRequest(region);
      
    } catch (error) {
      console.error(error);
    }
  };

  const getRegion = async (id) => {
    try {
      const response = await getRegionRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateRegion = async (id, newFields) => {
    try {
      const response = await updateRegionRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <RegionContext.Provider
      value={{
        regiones,
        loadRegiones,
        deleteRegion,
        createRegion,
        getRegion,
        updateRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};