import { useSelector } from "react-redux"
import { useActions } from "../hooks/useActions"

export function Counter() {
  const count = useSelector(state => state.counter.count)

  const {increment, decrement} = useActions()

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <button
          aria-label="Increment value"
          onClick={increment}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}