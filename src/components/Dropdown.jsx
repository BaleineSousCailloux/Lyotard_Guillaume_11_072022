import { useState } from 'react'
import styled from 'styled-components'
import ArrowUp from '../assets/VectorUp.svg'
import ArrowDown from '../assets/VectorDown.svg'

const DropdownContainer = styled.div`
  margin-top: 31px;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
`

const DropdownCase = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  height: 47px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  color: white;
  align-items: center;
`

const DropdownTitle = styled.h4`
  text-align: left;
  font-size: 24px;
  font-weight: 500;
`

const DropdownItems = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background-color: #f6f6f6;
  border-radius: 0 0 5px 5px;
  color: #ff6060;
`

const DropdownText = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background-color: #f6f6f6;
  border-radius: 0 0 5px 5px;
  color: #ff6060;
`

function Dropdown({ title, description, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return !isOpen ? (
    <DropdownContainer>
      <DropdownCase>
        <DropdownTitle>{title}</DropdownTitle>
        <img src={ArrowDown} alt="flèche" onClick={() => setIsOpen(true)} />
      </DropdownCase>
    </DropdownContainer>
  ) : (
    <DropdownContainer>
      <DropdownCase>
        <DropdownTitle>{title}</DropdownTitle>
        <img src={ArrowUp} alt="flèche" onClick={() => setIsOpen(false)} />
      </DropdownCase>
      {(() => {
        if (description) {
          return (
            <DropdownText>
              <p>{description}</p>
            </DropdownText>
          )
        } else if (items) {
          return (
            <DropdownItems>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DropdownItems>
          )
        }
      })()}
    </DropdownContainer>
  )
}

export default Dropdown
