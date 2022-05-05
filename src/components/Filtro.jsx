import React from 'react';

function Filtro() {
  return (
    <>
      <form onSubmit={() => dispatch(getPostByName())}>
        <label>Busqueda por nombre de posts</label>
        <input type="text" name="searchPostByNamey" />
        <button>Buscar </button>
      </form>
    </>
  );
}

export default Filtro;
