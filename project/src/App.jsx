import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

  // function getPhotos() {
  //   fetchPhotos()
  // }

  return (
    <div className='h-screen w-full bg-[#1e1e1e] text-white'>

      {/* Get photos */}
      <button className='bg-red-300 p-3 m-3 rounded-2xl text-black' 

      onClick={ async () => {
        const data = await fetchPhotos('cat')
        console.log(data.results);
        
      }}>Get photos</button>

      {/* Get Videos */}
      <button className='bg-red-300 p-3 m-3 rounded-2xl text-black' 
      onClick={ async () => {
        const data = await fetchVideos('cat')
        console.log(data.videos);
      }}>
      Get Videos</button>

    </div>
  )
}

export default App
