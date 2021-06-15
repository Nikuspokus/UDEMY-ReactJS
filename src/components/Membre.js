import React from 'react'

const Membre = ({ nom }) => {

  return (
    <h2>Membre de ma famille: { nom.toUpperCase() }</h2>
  )
}

export default Membre
