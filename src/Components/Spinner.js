import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
    <div className= "container">
      <img src= {loading} alt="" />
    </div>
  )
}
