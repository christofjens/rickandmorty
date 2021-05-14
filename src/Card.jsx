import React, { useState, useEffect } from 'react'
import './Card.css'

function Card() {
  const url = 'https://rickandmortyapi.com/api/character/?page=1'
  const [characters, setCharacters] = useState([])

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
          <button className="Card__button">Show Info</button>
          <main className="Card__main">
            {el.name} is a {el.gender} from the Series Rick and Morty.
          </main>
        </div>
      ))}
    </>
  )
}

export default Card
