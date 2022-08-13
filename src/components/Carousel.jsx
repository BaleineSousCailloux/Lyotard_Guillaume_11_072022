// import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowRight from '../assets/VectorR.svg'
import ArrowLeft from '../assets/VectorL.svg'

const Container = styled.div`
  width: 100%;
  height: 415px;
  box-sizing: border-box;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  border-radius: 25px;
  position: relative;
`

const Medias = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Navigation = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 23px;
`

const Arrows = styled.img`
  margin-top: 134px;
  height: 79px;
  width: 47px;
`

const Counter = styled.p`
  margin-top: 344px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

const PageTitle = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
`

const ContainerDrops = styled.div`
  width: 85%;
  margin-bottom: 100px;
`

function Carousel({ medias }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(0)

  useEffect(() => {
    setLength(medias.length)
  }, [medias])

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    } else if (currentIndex === length - 1) {
      setCurrentIndex(0)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    } else if (currentIndex === 0) {
      setCurrentIndex(length - 1)
    }
  }

  return (
    <Container>
      <Navigation>
        <Arrows src={ArrowLeft} alt="flèche" onClick={prev} />
        <Counter>
          {currentIndex + 1}/{medias.length}
        </Counter>
        <Arrows src={ArrowRight} alt="flèche" onClick={next} />
      </Navigation>
      <Medias src={medias[currentIndex]} alt="vue du logement" />
    </Container>
  )
}

export default Carousel
