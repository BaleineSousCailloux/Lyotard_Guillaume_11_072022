import PropTypes from 'prop-types'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'

const CardTitle = styled.h3`
  color: white;
  position: absolute;
  bottom: 0px;
  padding: 20px;
  font-size: 18px;
  margin: 0;
`

const CardImage = styled.img`
  width: 100%;
  min-height: 100%;
  position: absolute;
  object-fit: cover;
  background-image: linear-gradient(#ffffff00, #00000050);
`

const CardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 340px;
  width: 340px;
  border-radius: 10px;
  background-color: #ff6060;
  margin: 25px;
`

function Card({ cover, title }) {
  return (
    <CardWrapper>
      <CardImage src={cover} alt="couverture de la location" />
      <CardTitle>{title}</CardTitle>
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
