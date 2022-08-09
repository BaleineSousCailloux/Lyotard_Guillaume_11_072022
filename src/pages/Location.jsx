// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FetchDatas from '../Datas/FetchDatas'
// import { styled } from 'styled-components'
// import Dropdown from '../components/Dropdown'
// import Tag from '../components/Tags'
// import StarsScale from '../components/StarsScale'
// import Carousel from '../components/Carousel.jsx'

function Location() {
  const { locationId } = useParams()
  const allLocations = FetchDatas()
  console.log(locationId)
  allLocations.map((oneLocation) => {
    if (oneLocation.id === locationId) {
      return <div key={oneLocation.id}>J'ai trouvé {oneLocation.title}</div>
    } else {
      return <div>ERROR ENCORE</div>
    }
  })
}

export default Location
