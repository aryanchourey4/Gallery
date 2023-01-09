import { createSlice } from '@reduxjs/toolkit'

export const sideBarTypeSlice = createSlice({
  name: 'SideBarType',
  initialState: {
    value: false,
  },
  reducers: {
    changeSideBar: (state) => {
      state.value = !state.value
    },
  },
})

export const { changeSideBar } = sideBarTypeSlice.actions

export default sideBarTypeSlice.reducer