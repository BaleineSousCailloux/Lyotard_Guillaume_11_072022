import FetchDatas from '../Datas/FetchDatas'
import { Link } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'
import couverture from '../assets/locations-couverture-desktop.jpg'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  width: 90%;
  height: 223px;
  background-image: url(${couverture});
  font-size: 48px;
  color: white;
  text-align: center;
  vertical-align: middle;
  padding: auto;
  border-radius: 25px;
`

function Locations() {
  const allLocations = FetchDatas()
  // console.log(allLocations[0])
  return (
    <div>
      <PageTitle>Chez vous, partout et ailleurs</PageTitle>
      <CardsContainer>
        {allLocations.map((oneLocation) => (
          <Link to={oneLocation.id}>
            <Card
              key={oneLocation.id}
              title={oneLocation.title}
              cover={oneLocation.cover}
            />
          </Link>
        ))}
      </CardsContainer>
    </div>
  )
}

export default Locations
