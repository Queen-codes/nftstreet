import React from 'react'
import SellerCard from './SellerCard'

function Sellers() {
  return (
    <section className='top-sellers' data-aos="zoom-in">
        <h2 className='collection-title'>Top sellers</h2>
        <div className="sellers-container">
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
        </div>


    </section>
  )
}

export default Sellers