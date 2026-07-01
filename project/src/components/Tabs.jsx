import React from 'react'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'GIF']

  return (
    <div>

      {tabs.map(function(elem, idx){
        return <button key={idx}>{elem}</button>
      })}

    </div>
  )
}

export default Tabs
