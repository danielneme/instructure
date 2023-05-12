import { Form, Formik } from "formik";
import { useRegiones } from "../context/RegionProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RegionForm() {
  const { createRegion, getRegion, updateRegion } = useRegiones();
  const [region, setRegion] = useState({
    nombre: "",
    idregion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadRegion = async () => {
      if (params.id) {
        const region = await getRegion(params.id);
        console.log(region);
        setRegion({
          nombre: region.nombre,
          idregion: region.idregion,
        });
      }
    };
    loadRegion();
  }, []);

  return (
    <div>
      <Formik
        initialValues={region}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateRegion(params.id, values);
          } else {
            await createRegion(values);
          }
          navigate("/regiones");
          setRegion({
            nombre: "",
            idregion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
           
          >
            <h1>
              {params.id ? "Editar Region" : "Nueva Region"}
            </h1>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de region"
              
              onChange={handleChange}
              value={values.nombre}
            />

            <label>Codigo</label>
            <textarea
              name="idregion"
              rows="1"
              placeholder="Escriba Codigo de Region"
              onChange={handleChange}
              value={values.idregion}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegionForm;