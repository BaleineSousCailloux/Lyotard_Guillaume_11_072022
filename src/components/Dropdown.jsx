import { useState } from 'react'
import styled from 'styled-components'
import ArrowUp from '../assets/VectorUp.svg'
import ArrowDown from '../assets/VectorDown.svg'

const DropdownContainer = styled.div`
  margin-top: 31px;
  width: 100%;
`

const DropdownCase = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  height: 47px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  align-items: center;
`

const DropdownTitleA = styled.h4`
  text-align: left;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`

const DropdownTitleR = styled.h4`
  text-align: left;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

const DropdownItems = styled.div`
  padding: 25px 20px 20px 20px;
  background-color: #f6f6f6;
  border-radius: 0 0 5px 5px;
  color: #ff6060;
`

const DropdownText = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 25px 20px 20px 20px;
  background-color: #f6f6f6;
  border-radius: 0 0 5px 5px;
  color: #ff6060;
`

const TextA = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`
const TextB = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`

const Liste = styled.ul`
  font-size: 18px;
  font-weight: 400;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Puce = styled.li``

function Dropdown({ about, rental, title, description, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return !isOpen ? (
    <div>
      {(() => {
        if (about) {
          return (
            <DropdownContainer>
              <DropdownCase onClick={() => setIsOpen(true)}>
                <DropdownTitleA>{title}</DropdownTitleA>
                <img src={ArrowDown} alt="flèche" />
              </DropdownCase>
            </DropdownContainer>
          )
        } else if (rental) {
          return (
            <DropdownContainer>
              <DropdownCase onClick={() => setIsOpen(true)}>
                <DropdownTitleR>{title}</DropdownTitleR>
                <img src={ArrowDown} alt="flèche" />
              </DropdownCase>
            </DropdownContainer>
          )
        }
      })()}
    </div>
  ) : (
    <div>
      {(() => {
        if (about) {
          return (
            <DropdownContainer>
              <DropdownCase onClick={() => setIsOpen(false)}>
                <DropdownTitleA>{title}</DropdownTitleA>
                <img src={ArrowUp} alt="flèche" />
              </DropdownCase>
              <DropdownText>
                <TextA>{description}</TextA>
              </DropdownText>
            </DropdownContainer>
          )
        } else if (rental) {
          if (description) {
            return (
              <DropdownContainer>
                <DropdownCase onClick={() => setIsOpen(false)}>
                  <DropdownTitleR>{title}</DropdownTitleR>
                  <img src={ArrowUp} alt="flèche" />
                </DropdownCase>
                <DropdownText>
                  <TextB>{description}</TextB>
                </DropdownText>
              </DropdownContainer>
            )
          } else if (items) {
            return (
              <DropdownContainer>
                <DropdownCase onClick={() => setIsOpen(false)}>
                  <DropdownTitleR>{title}</DropdownTitleR>
                  <img src={ArrowUp} alt="flèche" />
                </DropdownCase>
                <DropdownItems>
                  <Liste>
                    {items.map((item) => (
                      <Puce key={item}>{item}</Puce>
                    ))}
                  </Liste>
                </DropdownItems>
              </DropdownContainer>
            )
          }
        }
      })()}
    </div>
  )
}

export default Dropdown
