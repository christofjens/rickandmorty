import React, { useState, useEffect } from 'react'
import './Card.css'

function Card() {
  const url = 'https://rickandmortyapi.com/api/character/?page=1'
  const [characters, setCharacters] = useState([])
  const [isHidden, setIsHidden] = useState(false)
  const toggleMain = () => {
    setIsHidden(!isHidden)
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
  }, [url])

  return (
    <>
      {characters.map(el => (
        <div key={el.id} className="Card">
          <img className="Card__profile" src={el.image} alt=""></img>
          <h2 className="Card__h2">{el.name}</h2>
          <button className="Card__button" onClick={toggleMain}>
            {isHidden ? 'Hide' : 'Show'} Info
          </button>
          {isHidden && (
            <main className={isHidden ? 'Card__main' : 'Card__main hidden'}>
              {el.name} is a {el.gender} from the Series Rick and Morty.
            </main>
          )}
        </div>
      ))}
    </>
  )
}

export default Card
