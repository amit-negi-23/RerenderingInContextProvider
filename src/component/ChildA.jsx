import React, { memo } from 'react'
import ChildB from './ChildB'

function ChildA() {
  console.log("child component A render")
  return (
    <div>
      <h2>Child Component A</h2>
      <ChildB />
    </div>
  )
}

export default React.memo(ChildA);
// export default ChildA;
