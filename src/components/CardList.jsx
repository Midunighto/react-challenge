import Card from "./Card"
import data from "../data/data.json";

function CardList(){
    return(
        <main >
            <h2>The latest parts </h2>
            <div className="cards-list">
            {data.map(article =>
                <Card 
                key={article.id} 
                article={article}
                categopry={article.category}
                price={article.price}/>
            )}
            </div>
        </main>
    )
}

export default CardList; 