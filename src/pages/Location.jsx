import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Dropdown from '../components/Dropdown'
import Tags from '../components/Tags'
import Stars from '../components/Stars'
import Carousel from '../components/Carousel.jsx'

const Container = styled.article`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 100px 0 100px;
`

const BlocInfos = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BlocTitre = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
`

const BlocHost = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: right;
`

const Host = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const SelfieContainer = styled.div`
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background: #d4d4d4;
`

const Selfie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Name = styled.h3`
  overflow-wrap: normal;
  width: 90px;
  line-height: 26px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
`

const BlocDrop = styled.div``

const DropLeft = styled.div``

const DropRight = styled.div``

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
    <div>
      {oneLocation && (
        <Container>
          <Carousel medias={oneLocation.pictures} />
          <BlocInfos>
            <BlocTitre>
              <h1>{oneLocation.title}</h1>
              <h2>{oneLocation.location}</h2>

              <Tags tags={oneLocation.tags} />
            </BlocTitre>
            <BlocHost>
              <Host>
                <Name>{oneLocation.host?.name}</Name>
                <SelfieContainer>
                  <Selfie
                    src={oneLocation.host?.picture}
                    alt={"photo de l'hôte " + oneLocation.host?.name}
                  />
                </SelfieContainer>
              </Host>
              <Stars rating={oneLocation.rating} />
            </BlocHost>
          </BlocInfos>
          <BlocDrop>
            <DropLeft>
              <Dropdown
                title="Description"
                description={oneLocation.description}
              />
            </DropLeft>
            <DropRight>
              <Dropdown title="Equipements" items={oneLocation.equipments} />
            </DropRight>
          </BlocDrop>
        </Container>
      )}
    </div>
  )
}

export default Location
