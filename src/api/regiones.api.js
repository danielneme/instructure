import axios from "axios";

export const getRegionesRequest = async () =>
  await axios.get("http://localhost:4000/regiones");

export const createRegionRequest = async (region) =>
  await axios.post("http://localhost:4000/regiones", region);

export const deleteRegionRequest = async (id) =>
  await axios.delete(`http://localhost:4000/regiones/${id}`);

export const getRegionRequest = async (id) =>
  await axios.get(`http://localhost:4000/regiones/${id}`);

export const updateRegionRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/regiones/${id}`, newFields);

/*export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/regiones/${id}`, {
    done,
  });*/