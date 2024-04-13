import React from 'react'
import { useAppContext } from '../hooks/useAppContext'

export default function ChildC() {
  const { state, dispatch } = useAppContext();
  console.log("child component C render")
  console.log(state)

  return (
    <div>
      <h2>Child Component C </h2>
      <p>Name: {state.student.name} </p>
      <p>Phone: {state.student.phone} </p>
      <button onClick={() => dispatch({ type: 'CHANGE_NAME', payload: 'Sooraj sir' })}>Change Name</button>
      <button onClick={() => dispatch({ type: 'CHANGE_PHONE', payload: 1234567890 })}>Change Phone</button>
    </div>
  )
}
