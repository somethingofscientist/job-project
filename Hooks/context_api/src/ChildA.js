import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name}) => {
  return (
    <div>
      <h1 style={{textTransform:"uppercase"}}>
        <ChildB name={name} />
      </h1>
    </div>
  )
}

export default ChildA