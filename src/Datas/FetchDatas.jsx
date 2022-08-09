import { useState, useEffect } from 'react'

function FetchDatas() {
  const [error, setError] = useState(false)
  const [locationsList, setLocationsList] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('./datas/logements.json')
        const locationsList = await response.json()
        setLocationsList(locationsList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return locationsList
}

export default FetchDatas
