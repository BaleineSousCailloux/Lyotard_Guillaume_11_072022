import Locations from '../components/Locations'
import styled from 'styled-components'
import couverture from '../assets/home-couverture.jpg'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 100px 0 100px;
  @media all and (max-width: 795px) {
    padding: 16px 20px 0 20px;
  }
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
  @media all and (max-width: 795px) {
    height: 111px;
    border-radius: 10px;
    align-items: flex-start;
  }
`

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  line-height: 58px;
  margin: 0;
  padding: 25px;
  z-index: 2;
  @media all and (max-width: 795px) {
    padding: 16px;
    line-height: 24px;
  }
`
const Title = styled.span`
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding-right: 15px;
  @media all and (max-width: 795px) {
    font-size: 24px;
    padding-right: 9px;
  }
`

const BlackFilter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #00000060;
  position: absolute;
  z-index: 1;
`

const Couverture = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  transform: translateY(98px);
  @media all and (max-width: 795px) {
    transform: translateY(10px) scale(1.8);
  }
`
// transform: translateY(98px);

function Home() {
  return (
    <Container>
      <PageTitle>
        <BlackFilter />
        <Couverture src={couverture} alt="image de couverture" />
        <TitleContainer>
          <Title>Chez vous,</Title>
          <Title>partout et ailleurs</Title>
        </TitleContainer>
      </PageTitle>
      <Locations />
    </Container>
  )
}

export default Home
