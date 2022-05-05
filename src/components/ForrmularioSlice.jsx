import { createSlice } from '@reduxjs/toolkit';

export const FormularioSlice = createSlice({
  name: 'formReducer',
  initialState: {
    nombre: '',
    descripcion: '',
  },
  reducers: {
    handleFormChange: {
        reducer: ( state, action ) => { state.formEntries = { nombre, descripcion} }},
        prepare: ( formEntries) => {
            return { payload: { nombre, descripcion }}
        }
  }
});

// Action creators are generated for each case reducer function
export const { handleFormChange } = FormularioSlice.actions

export default FormularioSlice.reducer
