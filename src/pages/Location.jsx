import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import FetchDatas from '../Datas/FetchDatas'
// import { styled } from 'styled-components'
import Dropdown from '../components/Dropdown'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import Carousel from '../components/Carousel.jsx'

function Location() {
  const [error, setError] = useState(false)
  const [locationsList, setLocationsList] = useState([])
  const { locationId } = useParams()
  // const { locationIdInt } = parseInt(locationId)

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

  console.log(locationsList)

  return (
    <article>
      {locationsList.map((rental) =>
        rental.id === locationId ? (
          <div key={rental.id}>
            <Carousel medias={rental.pictures} />
            <h1>{rental.title}</h1>
            <h2>{rental.location}</h2>
            <div>
              <h3>{rental.host.name}</h3>
              <img
                src={rental.host.picture}
                alt={"photo de l'hôte " + rental.host.name}
              />
            </div>
            <Stars rating={rental.rating} />
            <Tags tags={rental.tags} />
            <Dropdown title="Description" description={rental.description} />
            <Dropdown title="Equipements" items={rental.equipments} />
          </div>
        ) : null
      )}
    </article>
  )
}

export default Location
