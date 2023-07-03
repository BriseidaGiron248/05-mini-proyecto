import { useState, useEffect } from 'react'
import './App.css'
import Table from './components/Table'

function App () {
  const [info, setInfo] = useState([])
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
    <div className='default'>
      {
      info.map((dato) => (
        
      ))
    }
    </div>
  )
}

export default App
