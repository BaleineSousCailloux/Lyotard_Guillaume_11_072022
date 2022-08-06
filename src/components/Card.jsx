import PropTypes from 'prop-types'
//import DefaultPicture from '../../assets/profile.png'
// import styled from 'styled-components'
// import colors from '../../utils/style/colors'

// const CardLabel = styled.span`
//     color: ${colors.primary};
//     font-size: 22px;
//     font-weight: normal;
//     padding-left: 15px;
// `
// const CardTitle = styled.span`
//     color: black;
//     font-size: 22px;
//     font-weight: normal;
//     align-self: center;
// `

// const CardImage = styled.img`
//     height: 150px;
//     width: 150px;
//     align-self: center;
//     border-radius: 50%;
// `

// const CardWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     padding: 15px;
//     background-color: ${colors.backgroundLight};
//     border-radius: 30px;
//     width: 300px;
//     height: 300px;
//     transition: 200ms;
//     &:hover {
//         cursor: pointer;
//         box-shadow: 2px 2px 10px #e2e3e9;
//     }
// `

function Card({ cover, title }) {
  return (
    <div>
      <img src={cover} alt="couverture de la location" />
      <p>{title}</p>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
}

export default Card
