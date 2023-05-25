import { Form, Formik } from "formik";
import { useNodos } from "../context/NodoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NodoForm() {
  const { createNodo, getNodo, updateNodo } = useNodos();
  const [nodo, setNodo] = useState({
    idNodo: "",
    tipoNodo: "",
    cantRacks: "",
    cantRacks_disp: "",
    fechaPreventivo: "",
    periocidadPreventivo: "",
    nombre: "",
    idRegiones: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadNodo = async () => {
      if (params.id) {
        const nodo = await getNodo(params.id);
        console.log(nodo);
        setNodo({
          idNodo: nodo.idNodo,
          tipoNodo: nodo.tipoNodo,
          cantRacks: nodo.cantRacks,
          cantRacks_disp: nodo.cantRacks_disp,
          fechaPreventivo: nodo.fechaPreventivo,
          periocidadPreventivo: nodo.periocidadPreventivo,
          nombre: nodo.nombre,
          idRegiones: nodo.idRegiones,
        });
      }
    };
    loadNodo();
  }, []);

  return (
    <div>
      <Formik
        initialValues={nodo}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateNodo(params.id, values);
          } else {
            await createNodo(values);
          }
          navigate("/");
          setNodo({
            idNodo: "",
            tipoNodo: "",
            cantRacks: "",
            cantRacks_disp: "",
            fechaPreventivo: "",
            periocidadPreventivo: "",
            nombre: "",
            idRegiones: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Editar Nodo" : "Nuevo Nodo"}</h1>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de Nodo"
              onChange={handleChange}
              value={values.nombre}
            />

            <label>Identificador</label>
            <textarea
              name="idNodo"
              rows="1"
              placeholder="Escriba identificador del Nodo"
              onChange={handleChange}
              value={values.idNodo}
            ></textarea>
            <label>Tipo Nodo</label>
            <textarea
              name="tipoNodo"
              rows="1"
              placeholder="Deberia ser Select"
              onChange={handleChange}
              value={values.tipoNodo}
            ></textarea>
            <label>Cantidad de Racks</label>
            <textarea
              name="cantRacks"
              rows="1"
              placeholder="Racks Totales"
              onChange={handleChange}
              value={values.cantRacks}
            ></textarea>
            <label>Disponibles</label>
            <textarea
              name="cantRacks_disp"
              rows="1"
              placeholder="Racks Disponibles"
              onChange={handleChange}
              value={values.cantRacks_disp}
            ></textarea>
            <label>Fecha de MMO Preventivo</label>
            <textarea
              name="fechaPreventivo"
              rows="1"
              placeholder="Escriba fecha del mantenimiento"
              onChange={handleChange}
              value={values.fechaPreventivo}
            ></textarea>
            <label>Periocidad</label>
            <textarea
              name="periocidadPreventivo"
              rows="1"
              placeholder="SELECT DEl ENUM"
              onChange={handleChange}
              value={values.periocidadPreventivo}
            ></textarea>
                   <label>Region</label>
            <textarea
              name="idRegiones"
              rows="1"
              placeholder="SELECT DE Regiones"
              onChange={handleChange}
              value={values.idRegiones}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NodoForm;
