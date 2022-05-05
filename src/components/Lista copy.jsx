import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPosts, getPostFromState } from '../redux/postRed';

const Lista = ({posts}) => {
  const dispatch = useDispatch();

  window.addEventListener('load', function (e) {
    dispatch(getPosts());
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>DESCRIPCION</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td> {item.nombre}</td>
              <td> {item.descripcion}</td>
              <td>
                <button onClick={() => dispatch(deletePost(item.id))}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Lista;
