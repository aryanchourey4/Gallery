import { createSlice } from '@reduxjs/toolkit'

export const yearSlice = createSlice({
  name: 'year',
  initialState: {
    value: 0,
  },
  reducers: {
    changeYear: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeYear } = yearSlice.actions

export default yearSlice.reducer