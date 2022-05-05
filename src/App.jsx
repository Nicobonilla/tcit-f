import { useEffect } from 'react';
import { Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Filtro from './components/Filtro';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
//import { getPosts } from './redux/postRed'
import { getPosts } from './components/postsSlice';

function App() {
  const dispatch = useDispatch();

  window.addEventListener('load', function (e) {
    dispatch(getPosts());
  });

  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { array } = useSelector((store) => store.posts);
  const formValue = useSelector((store) => store.form);
  return (
    <>
      {console.log(array)}
      {console.log(formValue)}

      <Filtro />
      <Lista posts={array} />
    </>
  );
}

export default App;
