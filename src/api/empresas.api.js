import axios from "axios";

export const getEmpresasRequest = async () =>
  await axios.get("http://localhost:4000/empresas");

export const createEmpresaRequest = async (empresa) =>
  await axios.post("http://localhost:4000/empresas", empresa);

export const deleteEmpresaRequest = async (id) =>
  await axios.delete(`http://localhost:4000/empresas/${id}`);

export const getEmpresaRequest = async (id) =>
  await axios.get(`http://localhost:4000/empresas/${id}`);

export const updateEmpresaRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/empresas/${id}`, newFields);

