
'use client'
import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.click}>{props.title}</button>
    </div>
  )
}
