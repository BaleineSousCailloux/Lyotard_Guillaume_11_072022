import React from 'react'
import { NavLink } from 'react-router-dom'
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
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`

// const NavigationLink = styled(NavLink)`
//   text-decoration: none;
//   color: #ff6060;
//   padding-left: 57px;
// `

function Header() {
  return (
    <Container>
      <HeaderLogo src={logo} alt="logo kaza" />
      <NavContainer>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: '#ff6060',
            paddingLeft: '57px',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: '#ff6060',
            paddingLeft: '57px',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          A Propos
        </NavLink>
      </NavContainer>
    </Container>
  )
}

export default Header
