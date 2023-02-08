import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [location, setlocation] = useState()
  const [locationInput, setlocationInput] = useState()
  const [hasError, sethasError] = useState(false)

  useEffect(() => {
    
    let URL
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      const URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setlocation(res.data)
        sethasError(false)
      })
      .catch(err => {
        sethasError(true)
        console.log(err)
      })

  }, [locationInput])

  const handlesubmit = e => {
    e.preventDefault()
    setlocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="background_img">
      <div className="App">
        <form className='app_form' onSubmit={handlesubmit}>
          <input className='form_input' placeholder='Enter a number from 1 to 126' id='inputSearch' type="text" />
          <button className='button'>Search</button>
        </form>
      </div>
      {

        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo
              location={location}
            />


            <div className="residents_container">
              {
                location?.residents.map(url => (
                  <ResidentCard
                    url={url}
                    key={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
