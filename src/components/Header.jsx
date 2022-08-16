import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-red.svg'
import styled from 'styled-components'

const HeaderLogo = styled.img`
  height: 68px;
  width: 210.32px;
  @media all and (max-width: 795px) {
    height: 45px;
    width: 145px;
  }
`

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 0 100px;
  @media all and (max-width: 795px) {
    padding: 20px 20px 0 20px;
  }
`

const NavContainer = styled.nav`
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  @media all and (max-width: 795px) {
    text-transform: uppercase;
    font-size: 12px;
    padding: 0;
  }
`

const NavigationLink = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 0 57px;
  @media all and (max-width: 795px) {
    padding: 0 0 0 10px;
  }
`

function Header() {
  return (
    <Container>
      <HeaderLogo src={logo} alt="logo kaza" />
      <NavContainer>
        <NavigationLink>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: '#ff6060',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Accueil
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: '#ff6060',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            A Propos
          </NavLink>
        </NavigationLink>
      </NavContainer>
    </Container>
  )
}

export default Header
