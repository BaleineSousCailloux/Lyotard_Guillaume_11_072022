import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { styled } from 'styled-components'
import Dropdown from '../components/Dropdown'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import Carousel from '../components/Carousel.jsx'

function Location() {
  const [error, setError] = useState(false)
  const [oneLocation, setOneLocation] = useState()
  const { locationId } = useParams()
  const navigate = useNavigate()

  // const { locationIdInt } = parseInt(locationId)

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('./datas/logements.json')
        const locationsList = await response.json()
        console.log(locationsList)
        const rental = locationsList.find((loc) => loc.id === locationId)
        if (rental) {
          setOneLocation(rental)
        } else {
          navigate('/not-found')
        }
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      }
    }
    fetchLocations()
  }, [navigate, locationId])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <article>
      {oneLocation && (
        <div>
          <Carousel medias={oneLocation.pictures} />
          <h1>{oneLocation.title}</h1>
          <h2>{oneLocation.location}</h2>
          <div>
            <h3>{oneLocation.host?.name}</h3>
            <img
              src={oneLocation.host?.picture}
              alt={"photo de l'hôte " + oneLocation.host?.name}
            />
          </div>
          <Stars rating={oneLocation.rating} />
          <Tags tags={oneLocation.tags} />
          <Dropdown title="Description" description={oneLocation.description} />
          <Dropdown title="Equipements" items={oneLocation.equipments} />
        </div>
      )}
    </article>
  )
}

export default Location
