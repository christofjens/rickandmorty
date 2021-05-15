import * as React from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <>
      <button className="Navigation__nav-button">Characters</button>
      <button className="Navigation__nav-button Navigation__nav-button--center">
        Locations
      </button>
      <button className="Navigation__nav-button">Episodes</button>
    </>
  )
}
