import React from 'react'
import {userContext} from './context'                                                

export default function About() {
  let user = React.useContext(userContext)

  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{textAlign:"center"}}>About me !!</h1>
    <p>deekub</p>

    </div>
  )
}

