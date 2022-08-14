import { createGlobalStyle } from 'styled-components'

const StyledRentalStyle = createGlobalStyle`
*{
  font-size: 18px;
}
`
function RentalStyle() {
  return <StyledRentalStyle />
}
export default RentalStyle
