import { useState } from 'react'
import './CharacterCard.css'

export default function CharacterCard({
  name,
  image,
  species,
  type,
  location,
}) {
  const [isHidden, setIsHidden] = useState(false)
  const toggleMain = () => {
    setIsHidden(!isHidden)
  }

  return (
    <section className="CharacterCard" onClick={() => toggleMain(!isHidden)}>
      <h2 className="CharacterCard__headline">{name}</h2>
      <p className="CharacterCard__main CharacterCard__main--top">
        from {location}
      </p>
      <img src={image} alt="" className="CharacterCard__portrait"></img>
      <div className="CharacterCard__background"></div>
      {isHidden && (
        <p className="CharacterCard__main">
          {name} is a {species} {type} from the Series Rick and Morty.
        </p>
      )}
    </section>
  )
}
