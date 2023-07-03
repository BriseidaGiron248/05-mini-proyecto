import { useState, useEffect } from 'react'
import './App.css'
import Table from './components/Table'
import NavBar from './components/NavBar'
import DropDown from './components/DropDown'

function App () {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const [info, setInfo] = useState([])

  const filteredData = info.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setInfo(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <div className='container'>
        <NavBar handleSearchChange={handleSearch} />
        <DropDown />

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Titulo</th>

            </tr>
          </thead>
        </table>
        {
  filteredData.map((dato) => (

    <Table
      key={dato.id}
      id={dato.user.id}
      name={dato.user.login}
      title={dato.title}
      url={dato.html_url}

    />
  ))

}
      </div>
    </div>

  )
}

export default App
