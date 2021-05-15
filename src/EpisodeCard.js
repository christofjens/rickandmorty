import React, { useState } from 'react'
import './EpisodeCard.css'

export default function EpisodeCard({ id, name, air_date, episode }) {
  return (
    <div key={id}>
      <h2>
        Episode {id}: {name}
      </h2>
      <p>
        {name} episode ({episode}) aired on {air_date}.
      </p>
    </div>
  )
}
