import { createSlice } from '@reduxjs/toolkit'

export const helloSlice = createSlice({
  name: 'halleyo',
  initialState: {
    value: 'oolala',
  },
  reducers: {
    hello: (state, action) => {
      state.value = action.payload
    },
    bello: (state) => {
      state.value = 'bello'
    },
  },
})

export const { hello, bello } = helloSlice.actions

export default helloSlice.reducer