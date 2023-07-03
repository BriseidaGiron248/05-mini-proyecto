import React from 'react'

const Table = ({ id, name, title, url }) => {
  return (
    <body>
      <div className='container'>
        <table className='table'>

          <tbody>
            <tr>
              <th>{id}</th>
              <td>{name}</td>
              <td><a href={url}>{title}</a></td>

            </tr>
          </tbody>
        </table>
      </div>
    </body>

  )
}

export default Table
