import React from 'react'
import HeroImage from '../assets/hero-image.png'
import heroimage2 from '../assets/hero-image-2.png'
import Blur from '../assets/blur-background1.png'
function Hero() {
  return (
    <div className="hero-section">
        <section className="hero-text">
            <h1>Discover Rare Collections of Art & NFTs</h1>
            <p>NFTStreet is the world's best non-fungible token (NFT) marketplace for both digital and physical assets.</p>
            <button className='hero-btn btn--pink'>Start Bidding</button>
        </section>

        <section className="hero-image">
          <picture>
            <source srcSet={heroimage2} media="(min-width: 1025px)"/> 
            <img src={HeroImage} alt='hero-img' className='hero-img'/>
          </picture>
       </section>

        <section className="stats">

          <div className="active-users">
            <span className="number">78k</span>
            <span className="title">Active-users</span>
          </div>

          <div className="artworks">
            <span className='number'>17k</span>
            <span className='title'> Artworks</span>
          </div>

          <div className="artists">
            <span className='number'>25k</span>
            <span className='title'>Artists</span>
          </div>
        </section>
    </div>
  )
}

export default Hero