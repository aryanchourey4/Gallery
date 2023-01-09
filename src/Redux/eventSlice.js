import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    value: 0,
  },
  reducers: {
    changeEvent: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { change } = eventSlice.actions

export default eventSlice.reducer