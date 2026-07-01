import React from 'react'
import {  } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {

  return (
    <div className='h-screen w-full bg-[#1e1e1e] text-white'>

      <SearchBar />
      <Tabs />

    </div>
  )
}

export default App
