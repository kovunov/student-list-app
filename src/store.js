import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './slices/studentSlice'
//Redux store contains all the reducers
//Redux state can be represented as slices of state
export const store = configureStore({
  reducer: {
    students: studentReducer
  },
})