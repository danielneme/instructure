import { Form, Formik } from "formik";
import { useEmpresas } from "../context/EmpresaProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EmpresaForm() {
  const { createEmpresa, getEmpresa, updateEmpresa } = useEmpresas();
  const [empresa, setEmpresa] = useState({
    nombre: "",
    cuit: "",
    telefono: "",
    correo: "",
    tipo: "",
    direccion: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    REGIONES_idregion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmpresa = async () => {
      if (params.id) {
        const empresa = await getEmpresa(params.id);
        console.log(empresa);
        setEmpresa({
          nombre: empresa.nombre,
          cuit: empresa.cuit,
          telefono: empresa.telefono,
          correo: empresa.correo,
          tipo: empresa.tipo,
          direccion: empresa.direccion,
          provincia: empresa.provincia,
          ciudad: empresa.ciudad,
          codigoPostal: empresa.codigoPostal,
          REGIONES_idregion: empresa.REGIONES_idregion,
        });
      }
    };
    loadEmpresa();
  }, []);

  return (
    <div>
      <Formik
        initialValues={empresa}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEmpresa(params.id, values);
          } else {
            await createEmpresa(values);
          }
          navigate("/");
          setEmpresa({
            nombre: "",
            cuit: "",
            telefono: "",
            correo: "",
            tipo: "",
            direccion: "",
            provincia: "",
            ciudad: "",
            codigoPostal: "",
            REGIONES_idregion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Editar Empresa" : "Nueva Empresa"}</h1>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de la Emrpesa"
              onChange={handleChange}
              value={values.nombre}
            />

            <label>CUIT</label>
            <textarea
              name="cuit"
              rows="1"
              placeholder="Escriba CUIT de la empresa"
              onChange={handleChange}
              value={values.cuit}
            ></textarea>
            <label>E-mail</label>
            <textarea
              name="correo"
              rows="1"
              placeholder="Escriba E-mail"
              onChange={handleChange}
              value={values.correo}
            ></textarea>
            <label>Telefono</label>
            <textarea
              name="telefono"
              rows="1"
              placeholder="Escriba Telefono"
              onChange={handleChange}
              value={values.telefono}
            ></textarea>
            <label>Tipo de Empresa</label>
            <textarea
              name="tipo"
              rows="1"
              placeholder="ESTE DEBERIA SER UN SELECT"
              onChange={handleChange}
              value={values.tipo}
            ></textarea>
            <label>Direccion</label>
            <textarea
              name="direccion"
              rows="1"
              placeholder="Escriba su Direccion"
              onChange={handleChange}
              value={values.direccion}
            ></textarea>
            <label>Provincia</label>
            <textarea
              name="provincia"
              rows="1"
              placeholder="Provincia"
              onChange={handleChange}
              value={values.provincia}
            ></textarea>
            <label>Ciudad</label>
            <textarea
              name="ciudad"
              rows="1"
              placeholder="Escriba Ciudad"
              onChange={handleChange}
              value={values.ciudad}
            ></textarea>
            <label>Codigo Postal</label>
            <textarea
              name="codigoPostal"
              rows="1"
              placeholder="Escriba Codigo Postal"
              onChange={handleChange}
              value={values.codigoPostal}
            ></textarea>
              <label>Region</label>
            <textarea
              name="REGIONES_idregion"
              rows="1"
              placeholder="Este deberia ser un comboBOX"
              onChange={handleChange}
              value={values.REGIONES_idregion}
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

export default EmpresaForm;
