import React, { useState } from 'react'
import './CharacterCard.css'

export default function CharacterCard({ name, image, gender, id, location }) {
  const [isHidden, setIsHidden] = useState(false)
  const toggleMain = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <div key={id} className="CharacterCard">
        <header className="CharacterCard__header">
          Meet
          <h2 className="CharacterCard__h2">{name}</h2>
          from Planet {location}
          <img className="CharacterCard__profile" src={image} alt=""></img>
        </header>
        <button
          className="CharacterCard__button"
          onClick={() => toggleMain(!isHidden)}
        >
          {isHidden ? 'Hide' : 'Show'} Info
        </button>
        {isHidden && (
          <main className="CharacterCard__main">
            {name} is a {gender} from the Series Rick and Morty.
          </main>
        )}
      </div>
    </>
  )
}
