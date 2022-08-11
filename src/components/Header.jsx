import { Link } from 'react-router-dom'
import logo from '../assets/logo-red.svg'
import styled from 'styled-components'

const HeaderLogo = styled.img`
  height: 68px;
  width: 210.32px;
`

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 40px 100px 0 100px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ff6060;
  padding-left: 57px;
  font-size: 24px;
  font-weight: 500;
`

function Header() {
  return (
    <Container>
      <HeaderLogo src={logo} alt="logo kaza" />
      <NavContainer>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </NavContainer>
    </Container>
  )
}

export default Header
