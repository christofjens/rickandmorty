import React, { useState } from 'react'
import './EpisodeCard.css'

export default function EpisodeCard({ id, name, air_date, episode }) {
  console.log(id + '')
  return (
    <div className="EpisodeCard">
      <h2 className="EpisodeCard__headline">
        Episode {id}: {name}
      </h2>
      <p className="EpisodeCard__main">
        The episode "{name}" ({episode}) aired on {air_date}.
      </p>
    </div>
  )
}
