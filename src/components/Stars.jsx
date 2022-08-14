import styled from 'styled-components'
import EmptyStar from '../assets/StarEmpty.svg'
import FullStar from '../assets/StarFull.svg'

const Empty = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 0 0 10px;
`

const Full = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 0 0 10px;
`

function Stars({ rating }) {
  const ratingRange = [1, 2, 3, 4, 5]

  return (
    <div>
      {ratingRange.map((unit) =>
        rating >= unit ? (
          <Full src={FullStar} alt="Etoile remplie" key={unit.toString()} />
        ) : (
          <Empty src={EmptyStar} alt="Etoile vide" key={unit.toString()} />
        )
      )}
    </div>
  )
}

export default Stars
