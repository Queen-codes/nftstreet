function Collection(props) {
  return (
    <div className="collection-card" data-aos="zoom-in">
        <div className="image-grid">
            <img src={props.img1} alt="" className="image-1"/>
            <img src={props.img2} alt="" className="image-2"/>
            <img src={props.img3} alt="" className="image-3"/>
            <img src={props.img4} alt="" className="image-4"/>
        </div>
        <section className="collection-details">
            <span className="collection-name">{props.title}</span>
            <span className="items">{props.quantity} items</span>
        </section>
    </div>
  )
}

export default Collection