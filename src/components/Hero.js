import React from 'react'

function Hero({heroNames}) {
    if(heroNames==='joker')
    {
        throw new Error('not a hero')
    }
  return (
    <div>
      {heroNames}
    </div>
  )
}

export default Hero
