import axios from "axios";

export const getNodosRequest = async () =>
  await axios.get("http://localhost:4000/nodos");

export const createNodoRequest = async (nodo) =>
  await axios.post("http://localhost:4000/nodos", nodo);

export const deleteNodoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/nodos/${id}`);

export const getNodoRequest = async (id) =>
  await axios.get(`http://localhost:4000/nodos/${id}`);

export const updateNodoRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/nodos/${id}`, newFields);

