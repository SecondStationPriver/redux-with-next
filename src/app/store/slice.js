import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name: 'valores',
  initialState: {
    nombre: '',
  },
  reducers: {
    guardarNombre: (state, action) => {
      state.nombre = action.payload
    },
  },
})
export const { guardarNombre } = Slice.actions