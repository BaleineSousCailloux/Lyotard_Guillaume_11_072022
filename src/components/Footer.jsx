import logo from '../assets/logo-white.svg'
import styled from 'styled-components'

const FooterLogo = styled.img`
  height: 39.44px;
  width: 122px;
  margin: 0;
`

const CopyRight = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`

const FooterContainer = styled.div`
  box-sizing: border-box;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  height: 209px;
  width: 100%;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;
  padding-top: 66px;
  padding-bottom: 29px;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="logo kasa" />
      <CopyRight>© 2020 Kasa. All rights reserved</CopyRight>
    </FooterContainer>
  )
}

export default Footer
