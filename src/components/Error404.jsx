import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorNumber = styled.h1`
  color: #ff6060;
  font-size: 288px;
  font-weight: 700;
  text-align: center;
`

const Oups = styled.h2`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

function Error404() {
  return (
    <div>
      <ErrorNumber>404</ErrorNumber>
      <Oups>Oups ! La page que vous demandez n'existe pas.</Oups>
      <StyledLink to="/">Retourner à la page d'acccueil</StyledLink>
    </div>
  )
}

export default Error404
