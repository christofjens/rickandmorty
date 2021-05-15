import React, { useState } from 'react'
import './CharacterCard.css'

export default function CharacterCard({ name, image, gender, id, location }) {
  const [isHidden, setIsHidden] = useState(false)
  const toggleMain = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <div key={id}>
        <header>
          Meet
          <h2>{name}</h2>
          from Planet {location}
          <img src={image} alt=""></img>
        </header>
        <button onClick={() => toggleMain(!isHidden)}>
          {isHidden ? 'Hide' : 'Show'} Info
        </button>
        {isHidden && (
          <main>
            {name} is a {gender} from the Series Rick and Morty.
          </main>
        )}
      </div>
    </>
  )
}
