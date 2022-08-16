import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 25px;
  background: #f6f6f6;
  margin-top: 45px;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  @media all and (max-width: 795px) {
    border-radius: none;
    width: 100%;
    margin: 0;
    background: #ffffff;
    padding: 0 0 25px 0;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

function Locations() {
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

  return (
    <CardsContainer>
      {locationsList.map((oneLocation) => (
        <Link to={oneLocation.id} key={oneLocation.id}>
          <Card
            key={oneLocation.id}
            title={oneLocation.title}
            cover={oneLocation.cover}
          />
        </Link>
      ))}
    </CardsContainer>
  )
}

export default Locations
