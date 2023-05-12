import { createContext, useContext, useState } from "react";
import { PersonaContext } from "./PersonaContext";
import {
  getPersonasRequest,
  deletePersonaRequest,
  createPersonaRequest,
  getPersonaRequest,
  updatePersonaRequest,
} from "../api/personas.api";


export const usePersonas = () => {
  const context = useContext(PersonaContext); //HAY QUE CREARLO COMO ESTA PARA USAR EL CONTEXTO PARA TODOS POR EL BUG DE VITE.
  if (context === undefined) {
    throw new Error("usePersonas must be used within a PersonaContextProvider");
  }
  return context;
};

export const PersonaContextProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);

  async function loadPersonas() {
    const response = await getPersonasRequest();
    setPersonas(response.data);
  }

  const deletePersona = async (id) => {
    try {
      const response = await deletePersonaRequest(id);
      setPersonas(personas.filter((persona) => persona.dni !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createPersona = async (persona) => {
    try {
      await createPersonaRequest(persona);
      
    } catch (error) {
      console.error(error);
    }
  };

  const getPersona = async (id) => {
    try {
      const response = await getPersonaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePersona = async (id, newFields) => {
    try {
      const response = await updatePersonaRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <PersonaContext.Provider
      value={{
        personas,
        loadPersonas,
        deletePersona,
        createPersona,
        getPersona,
        updatePersona,
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
}; 