import React from 'react'
import ChildC from './ChildC'

export default function ChildB() {
    console.log("child component B render")

  return (
    <div>
        <h2>Child Component B</h2>
        <ChildC />
    </div>
  )
}
