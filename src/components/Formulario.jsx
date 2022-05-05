import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Formulario() {
  const formEntries = useSelector( state => state.formEntries)
  const dispatch = useDispatch()
  return (
    <>
      <form onSubmit={() => dispatch(addPost())}>
        <label>Agregar nuevo post</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
          value={formEntries.nombre}
          onChange={() => (handleFormChange())}
        />
        <input
          type="text"
          name="descripcion"
          id='descripcion'
          placeholder="Descripción"
          value={formEntries.descripcion}
          onChange={() => (handleFormChange())}
        />
        <input id="addPost" type="submit" value="Agregar" />
      </form>
    </>
  );
}

export default Formulario;
