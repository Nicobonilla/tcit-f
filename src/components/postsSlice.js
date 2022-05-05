import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
  const res = await axios.get(`http://localhost:5000/list-posts`);
  return res.data;
});
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    array: [],
    isLoading: 'idls',
  },
  reducers: {
    postReducer: {
      // getPostByName(state) {},
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = 'Pending';
      })
      .addCase(getPosts.fullfilled, (state, action) => {
        state.array = [state.array, actions.payload];
      })
      .addCase(getPosts.failed, (state, action) => {
        state.posts = "Failed";
      });
  },
});

export default postsSlice.reducer;
/*
                  reducer: ( state, action ) => { state.array = {...state.array, action.payload }  }},
          prepare: ( state ) => {
              return {payload: dispatch }
          }
      }
  });*/

// Action creators are generated for each case reducer function
