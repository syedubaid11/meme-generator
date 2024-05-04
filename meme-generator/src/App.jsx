import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/nav'
import Meme from '../components/meme'
import data from '../components/data'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Meme></Meme>
    </>
  )
}

export default App
