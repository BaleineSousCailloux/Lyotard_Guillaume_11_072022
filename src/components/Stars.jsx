import styled from 'styled-components'

const Empty = styled.span`
  font-size: 30px;
  color: #e3e3e3;
`

const Full = styled.span`
  font-size: 30px;
  color: #ff6060;
`

function Stars({ rating }) {
  const ratingRange = [1, 2, 3, 4, 5]

  return (
    <div>
      {ratingRange.map((unit) =>
        rating >= unit ? (
          <Full key={unit.toString()}>*</Full>
        ) : (
          <Empty key={unit.toString()}>*</Empty>
        )
      )}
    </div>
  )
}

export default Stars
