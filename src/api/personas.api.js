import axios from "axios";

export const getPersonasRequest = async () =>
  await axios.get("http://localhost:4000/personas");

export const createPersonaRequest = async (persona) =>
  await axios.post("http://localhost:4000/personas", persona);

export const deletePersonaRequest = async (id) =>
  await axios.delete(`http://localhost:4000/personas/${id}`);

export const getPersonaRequest = async (id) =>
  await axios.get(`http://localhost:4000/personas/${id}`);

export const updatePersonaRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/personas/${id}`, newFields);

