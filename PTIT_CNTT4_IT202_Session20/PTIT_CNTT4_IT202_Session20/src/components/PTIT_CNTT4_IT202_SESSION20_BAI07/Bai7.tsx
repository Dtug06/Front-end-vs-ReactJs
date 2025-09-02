import React, { useReducer } from 'react'

export default function Bai7() {
  const initialState = {
    count: 0,
  }

  const counterReducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + action.payload }
      case "DECREASE":
        return { count: state.count - action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState)

  const handleIncrease = () => {
    dispatch({ type: "INCREASE", payload: 1 })
  }

  const handleDecrease = () => {
    dispatch({ type: "DECREASE", payload: 1 })
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  )
}