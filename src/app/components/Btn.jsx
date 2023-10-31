'use client' // is used to enable browser events
import React from 'react'

export default function Btn({text}) {
  return (
    <button onClick={() => console.log("buy")} >{text}</button>
  )
}
