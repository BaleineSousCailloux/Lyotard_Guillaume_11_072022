import { Link } from 'react-router-dom'
import logo from '../assets/logo-red.svg'
import styled from 'styled-components'

const HeaderLogo = styled.img`
  height: 68px;
  width: 210.32px;
`

// const NavContainer = styled.nav`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

function Header() {
  return (
    <div>
      <HeaderLogo src={logo} alt="logo kaza" />
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </div>
  )
}

export default Header
