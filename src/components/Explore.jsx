import React from 'react'

function Explore(props) {

    
  return (
    <div className='explore-card' data-aos="zoom-in">
        <img src={props.imageUrl} alt="" />
        <div className="liked" onClick={props.toggleFavorite}>
            {props.favorite ? <i className='bx bxs-heart' ></i> : <i className='bx bx-heart'></i> }
        </div>

        <div className="card-details">
            <section className="description">
                <span className="name">{props.title}</span>
                <span className="author"> <a href="#">{props.artist}</a></span>
            </section>

            <section className='pricing'>
                <span className="eth-price">{props.ethPrice}</span>
                <span className="dollar-price">{props.dollarPrice}</span>
            </section>

            <button className='btn btn-black'>Place Bid</button>
        </div>

    
    </div>
  )
}

export default Explore