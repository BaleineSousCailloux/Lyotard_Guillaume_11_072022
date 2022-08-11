// import React from 'react'
import { useEffect, useState } from 'react'

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
    <div>
      <div>
        <span onClick={prev}>arrowLeft</span>
        <div>
          <img src={medias[currentIndex]} alt="vue du logement" width="300px" />
        </div>
        <span onClick={next}>arrowRight</span>
      </div>
      <div>
        <p>
          {currentIndex + 1}/{medias.length}
        </p>
      </div>
    </div>
  )
}

export default Carousel
