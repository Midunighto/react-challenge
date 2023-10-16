function Card({article}){
    return(
        <div className="card">  
            <img src={article.image} alt={article.title} className="card-img"/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.price}</p>
        </div>
    )
}

export default Card;