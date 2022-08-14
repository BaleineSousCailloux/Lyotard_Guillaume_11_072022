import Dropdown from '../components/Dropdown'
import styled from 'styled-components'
import couverture from '../assets/about-couverture-desktop.jpg'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 100px 0 100px;
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

const ContainerDrops = styled.div`
  width: 85%;
  margin-bottom: 100px;
`

function About() {
  return (
    <Container>
      <PageTitle>
        <BlackFilter />
        <Couverture src={couverture} alt="image de couverture" />
      </PageTitle>
      <ContainerDrops>
        <Dropdown
          about
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          about
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          about
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          about
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </ContainerDrops>
    </Container>
  )
}

export default About
