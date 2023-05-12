import { Form, Formik } from "formik";
import { usePersonas } from "../context/PersonaProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PersonaForm() {
  const { createPersona, getPersona, updatePersona } = usePersonas();
  const [persona, setPersona] = useState({
    username: "",
    dni: "",
    email: "",
    password: "",
    telefono: "",
    tipo_persona: "",
    empresa: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPersona = async () => {
      if (params.id) {
        const persona = await getPersona(params.id);
        console.log(persona);
        setPersona({
          username: persona.nombre,
          dni: persona.dni,
          email: persona.email,
          password: persona.password,
          telefono: persona.telefono,
          tipo_persona: persona.tipo_persona,
          empresa: persona.empresa,
        });
      }
    };
    loadPersona();
  }, []);

  return (
    <div>
      <Formik
        initialValues={persona}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updatePersona(params.id, values);
          } else {
            await createPersona(values);
          }
          navigate("/personas");
          setPersona({
            username: "",
            dni: "",
            email: "",
            password: "",
            telefono: "",
            tipo_persona: "",
            empresa: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Editar Usuario" : "Nueva Usuario"}</h1>
            <label>Nombre</label>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              onChange={handleChange}
              value={values.username}
            />

            <label>DNI</label>
            <textarea
              name="dni"
              rows="1"
              placeholder="Escriba DNI Usuario"
              onChange={handleChange}
              value={values.dni}
            ></textarea>
            <label>E-mail</label>
            <textarea
              name="email"
              rows="1"
              placeholder="Escriba E-mail"
              onChange={handleChange}
              value={values.email}
            ></textarea>
            <label>Contraseña</label>
            <textarea
              name="password"
              rows="1"
              placeholder="Escriba Contraseña del Usuario"
              onChange={handleChange}
              value={values.password}
            ></textarea>
            <label>Telefono</label>
            <textarea
              name="telefono"
              rows="1"
              placeholder="Escriba Telefono"
              onChange={handleChange}
              value={values.telefono}
            ></textarea>
            <label>Tipo de usuario</label>
            <textarea
              name="tipo_persona"
              rows="1"
              placeholder="ESTE DEBERIA SER UN SELECT"
              onChange={handleChange}
              value={values.tipo_persona}
            ></textarea>
            <label>Pertenece a:</label>
            <textarea
              name="empresa"
              rows="1"
              placeholder="SELECT DE EMPRESAS"
              onChange={handleChange}
              value={values.empresa}
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

export default PersonaForm;
