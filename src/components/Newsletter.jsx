import React from 'react'
import NftImage from "../assets/Vector.png"
function Newsletter({onSubmit , value, handleChange}) {
  return (
    <section className='newsletter-section' data-aos="zoom-in">
        <div className="newsletter-img">
            <img src={NftImage} alt="" />
        </div>

        <div className="newsletter-form">
            <h2 className='newsletter-title'>Never miss a drop</h2>
            <p>NFTStreet is the world's best non-fungible token (NFT) marketplace for both digital and physical assets.</p>

            <form onSubmit={onSubmit}>
                <input type="email" name="email"  value={value} id="email" placeholder='Email Address' onChange={handleChange} />
                <button className='btn--pink'>Subscribe</button>
            </form>
        </div>


    </section>
  )
}

export default Newsletter