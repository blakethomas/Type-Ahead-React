import React from 'react'
import { render } from 'react-dom'
import { Typeahead } from 'react-bootstrap-typeahead'
import styled from 'styled-components'

async function pokemon() {
  const response = await fetch('http://localhost:3000/pokemon')
  return await response.json()
}

function TypeAhead() {
  return (
    <div className="background">
      <h1 className="title">Pokemon</h1>
      <Typeahead
        className="border"
        onChange={selected => {}}
        options={pokedex}
      />
    </div>
  )
}

const pokedex = []

pokemon().then(data => data.forEach(pokemon => pokedex.push(pokemon.name)))

render(<TypeAhead />, document.getElementById('root'))
