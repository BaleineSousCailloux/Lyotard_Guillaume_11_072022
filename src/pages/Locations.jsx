import { useState, useEffect } from 'react'
import Card from '../components/Card'
import logements from '../datas/logements.json'

function Locations() {
  const [error, setError] = useState(false)
  const [locationsList, setLocationsList] = useState([])

  async function fetchLocations() {
    try {
      const response = fetch(logements)
      const locationsList = await response.json()
      setLocationsList(locationsList)
    } catch (err) {
      console.log('===== error =====', err)
      setError(true)
    } finally {
      console.log(locationsList)
    }
  }

  useEffect(() => {
    fetchLocations()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      {locationsList.map(() => (
        <Card key={'id'} title={'title'} cover={'cover'} />
      ))}
    </div>
  )
}

export default Locations
