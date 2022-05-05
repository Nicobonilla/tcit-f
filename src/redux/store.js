import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../components/ForrmularioSlice'

import postSlice from '../components/postsSlice';

 const store = configureStore({
  reducer: {
    form: formReducer,
    posts: postSlice
  },
});

export default store
