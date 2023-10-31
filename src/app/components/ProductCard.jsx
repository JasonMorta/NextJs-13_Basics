
import React from 'react'
import Btn from './Btn'

export default function ProductCard({text}) {
  return (
    <div>
      <Btn text={"Buy"} /> 
      <Btn text={"Sell"} /> 
    </div>
  )
}
