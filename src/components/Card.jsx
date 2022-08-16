import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 340px;
  width: 340px;
  border-radius: 10px;
  background: #ff6060;
  margin: 25px 30px;
  @media all and (max-width: 795px) {
    height: 255px;
    width: 100%;
    margin: 20px 0 0 0;
  }
`

const CardTitleContainer = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 20px;
  margin: 0;
  line-height: 26px;
`
const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`

const Gradient = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff00, #00000080);
  position: absolute;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function Card({ cover, title }) {
  return (
    <CardWrapper>
      <Gradient />
      <CardImage src={cover} alt="couverture de la location" />
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
      </CardTitleContainer>
    </CardWrapper>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Titre de la location',
}

export default Card
