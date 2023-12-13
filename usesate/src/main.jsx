import React from 'react'
import {createRoot} from 'react-dom/client'
import Hero from './components/Hero'
import './index.css'
const root=document.getElementById('root')
createRoot(root).render(
  <div >
    <div className=''>
    <Hero/>
    </div>
  </div>
)
