import React from 'react'
import {userContext} from './context'                                                

export default function Contact() {
  let user = React.useContext(userContext)

  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{textAlign:"center"}}>CONTACT !!</h1>
    <p>Ma  doo miji</p>

    </div>
  )
}