import React from 'react'

const Cancion = ({ letra, cancion }) => {

  if (letra.length === 0) return null;

  return(
    <>
      <h2>Letra de cancion "{cancion}"</h2>
      <p className="letra">{letra}</p>
    </>
  )
}

export default Cancion;