import React from 'react'
//import binace from '../assets/Binanace.png'
import binance from '../assets/Binance.png'
import cadano from '../assets/Cardano.png'
import paradigm from '../assets/Paradigm.png'
import coinbase from '../assets/Coinbase.png'
import coincheck from '../assets/Coincheck.png'

function Contributors() {
  return (
    <div className='partners'>
        <img src={binance} alt="" />
        <img src={cadano} alt="" />
        <img src={coincheck} alt="" />
        <img src={paradigm} alt="" />
        <img src={coinbase} alt="" />
    </div>
  )
}

export default Contributors