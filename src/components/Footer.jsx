import logo from '../assets/logo-white.svg'
import styled from 'styled-components'

const FooterLogo = styled.img`
  height: 39.44px;
  width: 122px;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 209px;
  background-color: black;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}

export default Footer
