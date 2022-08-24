import React from 'react'
import avatar from '../assets/avatar.png'
function SellerCard() {
  return (
    <div className='seller-card'>
        <img src={avatar} alt="Seller's picture" />
        <div className="details">
            <span className="seller-name">Smart Adunni</span>
            <span className="price">885.4 ETH</span>
        </div>
    </div>
  )
}

export default SellerCard