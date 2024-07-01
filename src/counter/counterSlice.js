import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
  count: 0,
}

const initialState = (() => {
  const persistedState = localStorage.getItem('redux-counter')
  if (persistedState) {
    return JSON.parse(persistedState)
  }
  return DEFAULT_STATE
})()

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count = state.count - 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer