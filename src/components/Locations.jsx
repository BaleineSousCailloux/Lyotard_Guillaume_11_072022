import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'
import couverture from '../assets/locations-couverture-desktop.jpg'

const CardsContainer = styled.div`
  box-sizing: border-box;
  border-radius: 25px;
  background: #f6f6f6;
  margin-top: 45px;
  padding: 30px 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 100px 0 100px;
`

const PageTitle = styled.div`
  width: 100%;
  height: 223px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
  @media only screen and (max-width: 795px) {
    height: 500px;
  }
`

const Title = styled.h1`
  position: absolute;
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding: 25px;
`

const BlackFilter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #00000050;
  position: absolute;
`

const Couverture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    <Container>
      <PageTitle>
        <BlackFilter />
        <Couverture src={couverture} alt="image de couverture" />
        <Title>Chez vous, partout et ailleurs</Title>
      </PageTitle>
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
    </Container>
  )
}

export default Locations
