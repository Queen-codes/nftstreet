import React from 'react'

function Footer() {
  return (
    <footer>
        <section className="footer-header">
            <p className='header--title'>Nftstreet</p>
            <p>NFTStreet is the world's best non-fungible token (NFT) marketplace for both digital and physical assets.</p>
        </section>

        <section className="footer-ulinks">
            <h3>Useful Links</h3>
            <ul>
                 <li><a href="#">All NfTs</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Privacy terms</a></li>
            </ul>
         </section>

         <section className="footer-stats">
            <h3>Stats</h3>
            <ul>
                <li><a href="#">Rankings</a></li>
                <li><a href="#">Activity</a></li>
            </ul>
         </section>

         <section className="footer-resources">
            <h3>Resources</h3>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Gas-free MarketPlace</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Newsletter</a></li>
            </ul>
         </section>

         <section className="footer-icons">
            <h3>Follow us</h3>
            <ul>
                <li><a href="#"><i className="fa-brands fa-telegram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
         </section>
    </footer>
  )

}

export default Footer