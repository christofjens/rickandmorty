import React from 'react'
import './LocationCard.css'

export default function LocationCard({ id, type, name, dimension }) {
  return (
    <div className="LocationCard">
      <h2 className="LocationCard__headline">
        {type} {name}
      </h2>
      <p className="LocationCard__main">
        {type} {name} is located in the {dimension}.
      </p>
    </div>
  )
}
