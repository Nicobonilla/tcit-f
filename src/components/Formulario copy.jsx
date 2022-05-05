import React from 'react';
import { Formik } from 'formik';

function Formulario() {
  return (
    <>
        <Formik // useState + listener Onchange
          initialValues={{ nombre: '', descripcion: '' }}
          onSubmit={(values) => dispatch(addPost(values))}
        >
          {(
            { values, handleSubmit, handleChange } //destructuro props de formik
          ) => (
            <form onSubmit={handleSubmit}>
              <label>Agregar nuevo post</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleChange}
              />
              <input
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={values.descripcion}
                onChange={handleChange}
              />
              <input id="addPost" type="submit" value="Agregar" />
            </form>
          )}
        </Formik>
    </>
  );
}

export default Formulario;
