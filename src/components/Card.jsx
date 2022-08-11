import PropTypes from 'prop-types'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'

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
`

const CardTitle = styled.h2`
  color: #ffffff;
  position: absolute;
  bottom: 0px;
  padding: 20px;
  font-size: 18px;
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
