import axios from 'axios';
import { useSelector } from 'react-redux';
import TablaPosts from '../components/Lista';

// constantes
const dataInit = {
  array: [],
};

// types
const GET_POSTS_OK = 'GET_POSTS_OK';
const GET_POST_BY_NAME_OK = 'GET_POST_BY_NAME_OK';
const ADD_NEW_POST_OK = 'ADD_NEW_POST_OK';
const DELETE_POST_OK = 'DELETE_POST_OK';

// reducer
export default function postReducer(state = dataInit, action) {
  switch (action.type) {
    case GET_POSTS_OK:
      return {
        ...state,
        array:  action.payload,
      };
    case ADD_NEW_POST_OK:
      return {
        ...state,
        array: [...array, action.payload],
      };
    case DELETE_POST_OK:
      const newPosts = { ...state.array };
      delete newPosts[action.payload];
      return { ...state, array: newPosts };
    default:
      return state;
  }
}

// acciones
export const getPosts = () => async (dispatch, getState) => {
  // (parametro inicial) = ( activar reducer)
  try {
    const res = await axios.get(`http://localhost:5000/list-posts`);
    dispatch({
      type: GET_POSTS_OK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPost = (values) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`http://localhost:5000/new-post`, {
      ...values,
    });
    console.log(res.data)
    dispatch({
      type: ADD_NEW_POST_OK,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.delete(`http://localhost:5000/post/${id}`);
    dispatch({
      type: DELETE_POST_OK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostFromState = () => {
  dispatch({
    type: GET_POSTS_OK,
    payload: '',
  });
};
