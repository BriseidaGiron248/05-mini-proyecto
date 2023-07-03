import React from 'react'

const Table = ({ id, name, title, url }) => {
  return (
    <div className='default'>
      <h5>{title}</h5>
      <h5>{id}</h5>
    </div>
  )
}

export default Table
