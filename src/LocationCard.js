import React from 'react'
import './LocationCard.css'

export default function LocationCard({ id, type, name, dimension }) {
  return (
    <div>
      <h2>
        {type} {name}
      </h2>
      <p>
        The {type} {name} is located in dimension {dimension}.
      </p>
    </div>
  )
}
