import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './main.css'
import Cotegoria from '../Cotegoria/Cotegoria'

export default function Main() {
  return (
    <div  className='main'>

<Navbar/>
<div className="cotigoriya">
  <Cotegoria/>
</div>
      
    </div>
  )
}
