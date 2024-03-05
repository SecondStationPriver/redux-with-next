"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { guardarNombre } from '../store/slice'

const Escribir = () => {
  const [nuevoValor, setNuevoValor] = useState('')
  const dispatch = useDispatch ()
  const modificar = () => {
    dispatch(guardarNombre(nuevoValor))
  }
  return (
    <>
      <h1>Escribir: </h1>
      <div>
        <Link href='/leer'>Leer</Link>
      </div>
      <input
        type='text'
        value={nuevoValor}
        onChange={(e) => setNuevoValor(e.target.value)}
      />
      <button onClick={modificar}>Modificar valor</button>
    </>
  )
}

export default Escribir
