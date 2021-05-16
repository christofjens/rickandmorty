import { useState } from 'react'
import './CharacterCard.css'

export default function CharacterCard({ name, image, gender, location }) {
  const [isHidden, setIsHidden] = useState(false)
  const toggleMain = () => {
    setIsHidden(!isHidden)
  }

  return (
    <section>
      <h2>{name}</h2>
      from Planet {location}
      <img src={image} alt=""></img>
      <button onClick={() => toggleMain(!isHidden)}>
        {isHidden ? 'Hide' : 'Show'} Info
      </button>
      {isHidden && (
        <div>
          {name} is a {gender} from the Series Rick and Morty.
        </div>
      )}
    </section>
  )
}
