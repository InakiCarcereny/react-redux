import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../counter/counterSlice.js'

const persistanceMiddleware = store => next => action => {
  next(action)
  localStorage.setItem('redux-counter', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceMiddleware)
})