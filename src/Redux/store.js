import { configureStore } from '@reduxjs/toolkit'
import helloReducer from './helloSlice'
import sideBarTypeReducer from './sideBarTypeSlice'
import yearReducer from './yearSlice'
import eventReducer from './eventSlice'


export default configureStore({
  reducer: {
    halleyo: helloReducer,
    SideBarType: sideBarTypeReducer,
    year: yearReducer,
    event: eventReducer
  },
})