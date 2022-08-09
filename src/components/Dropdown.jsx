import { useState } from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
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

function Dropdown({ title, description, tags }) {
  const [isOpen, setIsOpen] = useState(false)

  return !isOpen ? (
    <DropdownContainer>
      <DropdownCase>
        <DropdownTitle>{title}</DropdownTitle>
        <span onClick={() => setIsOpen(true)}>arrow</span>
      </DropdownCase>
    </DropdownContainer>
  ) : (
    <DropdownContainer>
      <DropdownCase>
        <DropdownTitle>{title}</DropdownTitle>
        <span onClick={() => setIsOpen(false)}>arrow</span>
      </DropdownCase>
      {(() => {
        if (description) {
          return (
            <DropdownText>
              <p>{description}</p>
            </DropdownText>
          )
        } else if (tags) {
          return (
            <DropdownItems>
              <ul>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
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
