import React from 'react'

function Hero(props) {
  return (
    <>
    <h1 className="text-3xl font-bold text-gray-800 ">{props.AppName}</h1>
    <p className="mt-4 text-lg text-gray-600">A simple breathing meditation timer</p>
    </>
  )
}

export default Hero