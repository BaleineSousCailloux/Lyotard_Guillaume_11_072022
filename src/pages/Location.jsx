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
  justtify-content: flex-start;
  padding: 25px 100px 0 100px;
  @media all and (max-width: 795px) {
    padding: 25px 20px 0 20px;
  }
`

const BlocInfos = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  @media all and (max-width: 795px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: -4px;
  }
`

const BlocTitre = styled.div`
  box-sizing: border-box;
  width: calc(100% - 221px);
  display: flex;
  flex-direction: column;
  align-items: left;
  @media all and (max-width: 795px) {
    width: 100%;
  }
`

const Titre = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
  margin: 0;
  padding: 0;
  @media all and (max-width: 795px) {
    font-size: 18px;
  }
`

const Locality = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin: 0;
  padding: 10px 0 0 0;
  @media all and (max-width: 795px) {
    font-size: 14px;
  }
`

const BlocHost = styled.div`
  box-sizing: border-box;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media all and (max-width: 795px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 16px;
  }
`

const Host = styled.div`
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const SelfieContainer = styled.div`
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background: #d4d4d4;
  margin: 0;
  padding: 0;
  @media all and (max-width: 795px) {
    width: 32px;
    height: 32px;
  }
`

const Selfie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NameContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 52px;
  line-height: 26px;
  margin: 0 10px 0 0;
  @media all and (max-width: 795px) {
    line-height: 17px;
    height: 34px;
  }
`

const FirstName = styled.h3`
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin: 0;
  padding: 0;
  @media all and (max-width: 795px) {
    font-size: 12px;
  }
`
const LastName = styled.h3`
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  margin: 0;
  padding: 0;
  @media all and (max-width: 795px) {
    font-size: 12px;
  }
`

const BlocDrop = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media all and (max-width: 795px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`

const DropLeft = styled.div`
  box-sizing: border-box;
  width: 47.5%;
  @media all and (max-width: 795px) {
    width: 100%;
  }
`

const DropRight = styled.div`
  box-sizing: border-box;
  width: 47.5%;
  @media all and (max-width: 795px) {
    width: 100%;
  }
`

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

  function splitName(name) {
    const hostName = name.split(' ')
    return hostName
  }

  return (
    <div>
      {oneLocation && (
        <Container>
          <Carousel medias={oneLocation.pictures} />
          <BlocInfos>
            <BlocTitre>
              <Titre>{oneLocation.title}</Titre>
              <Locality>{oneLocation.location}</Locality>
              <Tags tags={oneLocation.tags} />
            </BlocTitre>
            <BlocHost>
              <Host>
                <NameContainer>
                  <FirstName>{splitName(oneLocation.host.name)[0]}</FirstName>
                  <LastName>{splitName(oneLocation.host.name)[1]}</LastName>
                </NameContainer>
                <SelfieContainer>
                  <Selfie
                    src={oneLocation.host.picture}
                    alt={"photo de l'hôte " + oneLocation.host.name}
                  />
                </SelfieContainer>
              </Host>
              <Stars rating={oneLocation.rating} />
            </BlocHost>
          </BlocInfos>
          <BlocDrop>
            <DropLeft>
              <Dropdown
                rental
                title="Description"
                description={oneLocation.description}
              />
            </DropLeft>
            <DropRight>
              <Dropdown
                rental
                title="Equipements"
                items={oneLocation.equipments}
              />
            </DropRight>
          </BlocDrop>
        </Container>
      )}
    </div>
  )
}

export default Location
