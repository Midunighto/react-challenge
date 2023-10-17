function Card({article}){
    return(
        <div className="card">  
            <img src={article.image} alt={article.title} className="card-img"/>
            <h3>{article.title}</h3>
            <p className="description">{article.description}</p>
            <p className="price">{article.price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Card;