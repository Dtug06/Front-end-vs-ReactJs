import React, { useReducer } from 'react'

export default function Bai8() {
  const initialFormState = {
    name: '',
    email: ''
  }

  const formReducer = (state: typeof initialFormState, action: any) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return { ...state, name: action.payload }
      case 'UPDATE_EMAIL':
        return { ...state, email: action.payload }
      default:
        return state
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <div>
      <h2>User Information Form</h2>

      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={formState.name}
          onChange={(e) => dispatch({ type: 'UPDATE_NAME', payload: e.target.value })}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })}
        />
      </div>

      <h3>Thông tin người dùng</h3>
      <p>Tên: {formState.name || '(Chưa nhập)'}</p>
      <p>Email: {formState.email || '(Chưa nhập)'}</p>
    </div>
  )
}