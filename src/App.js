import React, { useState, useEffect } from 'react'
import './App.css'
import CharacterCard from './CharacterCard'
import LocationCard from './LocationCard'
import EpisodeCard from './EpisodeCard'
// import Navigation from './Navigation'

export default function App() {
  const charUrl = 'https://rickandmortyapi.com/api/character'
  const locUrl = 'https://rickandmortyapi.com/api/location'
  const epUrl = 'https://rickandmortyapi.com/api/episode'
  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(charUrl)
      .then(res => res.json())
      .then(resBody => setCharacters([...resBody.results]))
  }, [charUrl])

  useEffect(() => {
    fetch(locUrl)
      .then(res => res.json())
      .then(resBody => setLocations(resBody.results))
  }, [locUrl])

  useEffect(() => {
    fetch(epUrl)
      .then(res => res.json())
      .then(resBody => setEpisodes(resBody.results))
  }, [epUrl])

  return (
    <div className="App">
      <section className="CharacterCard">
        {characters.map(({ id, name, image, species, status }) => (
          <CharacterCard
            key={id}
            name={name}
            image={image}
            species={species}
            status={status}
          ></CharacterCard>
        ))}
      </section>
      <section className="LocationCard">
        {locations.map(({ id, type, name, dimension }) => (
          <LocationCard
            key={id}
            type={type}
            name={name}
            dimension={dimension}
          />
        ))}
      </section>

      <section className="EpisodeCard">
        {episodes.map(({ id, name, air_date, episode }) => (
          <EpisodeCard
            key={id}
            name={name}
            air_date={air_date}
            episode={episode}
          />
        ))}
      </section>

      {/* <section className="Navigation">
        <Navigation />
      </section> */}
    </div>
  )
}
