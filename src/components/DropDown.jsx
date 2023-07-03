import React from 'react'

const DropDown = ({ etiquetas }) => {
  return (
    <div className='dropdown'>
      <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
        Etiquetas
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        <li><a className='dropdown-item' href='#'>Acción</a></li>
        <li><a className='dropdown-item' href='#'>Otra acción</a></li>
        <li><a className='dropdown-item' href='#'>Algo más aqui</a></li>
      </ul>
    </div>
  )
}

export default DropDown
