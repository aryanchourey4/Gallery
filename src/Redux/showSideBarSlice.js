import { createSlice } from '@reduxjs/toolkit'

export const showSideBarSlice = createSlice({
  name: 'SideBarView',
  initialState: {
    value: false,
  },
  reducers: {
    viewSideBar: (state) => {
      state.value = !state.value
    },
  },
})

export const { viewSideBar } = showSideBarSlice.actions

export default showSideBarSlice.reducer