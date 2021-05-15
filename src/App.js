import React, { useState, useEffect } from 'react'
import './App.css'
import CharacterCard from './CharacterCard'
import LocationCard from './LocationCard'
import EpisodeCard from './EpisodeCard'
import Navigation from './Navigation'

export default function App() {
  const charUrl = 'https://rickandmortyapi.com/api/character/?page=1'
  const locUrl = 'https://rickandmortyapi.com/api/location/?page=1'
  const epUrl = 'https://rickandmortyapi.com/api/episode/?page=1'
  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(charUrl)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
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
        <CharacterCard />
      </section>

      <section className="LocationCard">
        <LocationCard />
      </section>

      <section className="EpisodeCard">
        <EpisodeCard />
      </section>

      <section className="Navigation">
        <Navigation />
      </section>
    </div>
  )
}
