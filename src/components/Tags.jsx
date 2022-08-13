import styled from 'styled-components'

const TagDesign = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Name = styled.li`
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 10px;
  min-width: 115px;
  width: fit-content;
  height: 25px;
  line-height: 25px;
  margin: 10px 10px 10px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  background-color: #ff6060;
`

function Tags({ tags }) {
  return (
    <TagDesign>
      {tags.map((tag, index) => (
        <Name key={`${tag}-${index}`}>{tag}</Name>
      ))}
    </TagDesign>
  )
}

export default Tags
