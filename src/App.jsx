//import reactLogo from './assets/react.svg'
import { useEffect, useState } from "react"
import Collection from "./components/Collection"
import Contributors from "./components/Contributors"
import Explore from "./components/Explore"
//import ExploreContainer from "./components/ExploreContainer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Sellers from "./components/Sellers"
import exploredata from "./exploredata"
import collectionData from "./collectionData"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const[menu, setMenu] = useState(false)
  const[favorite, setFavorite] = useState(false)
  const[inputValue, setInputValue] = useState('')

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  function handleClick () {
    setMenu(prev => !prev)
  }

  function toggleFavorite () {
    setFavorite(prev => !prev)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputValue(' ');
    //console.log('submitted')
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  const exploreCards = exploredata.map(item => {
    return(
      <Explore
      key={item.id}
      {...item}
      favorite={favorite}
      toggleFavorite={toggleFavorite}
      />
    )
  })

  const collectionCard = collectionData.map(item => {
    return(
    <Collection 
     key={item.id}
    {...item}
    />
    
  )
})
  
  return (
    <div className="App">
      <Navbar 
      handleClick={handleClick} 
      menu={menu}
      />
      <Hero/>
      <Contributors/>
      <Sellers/>
      <h2 className="collection-title"> Explore</h2>
      <div className="explore-container">
        {exploreCards}
      </div>
      
      <h2 className="collection-title">Top Collection</h2>
      <section className="collection-container">
         {collectionCard}
      </section>

      <Newsletter onSubmit={handleSubmit} value={inputValue} handleChange={handleChange}/>
      <Footer/>
    </div>
  )
}

export default App
