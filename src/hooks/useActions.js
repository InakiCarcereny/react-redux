import { useDispatch } from "react-redux"
import { increment, decrement } from "../counter/counterSlice"

export const useActions = () => {
  const dispatch = useDispatch()

  const incrementCount = () => dispatch(increment())

  const decrementCount = () => dispatch(decrement())

  return {increment: incrementCount, decrement: decrementCount} 
}