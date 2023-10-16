import Card from "./Card"
import data from "../data/data.json";

function CardList(){
    return(
        <main className="cards-list">
            {data.map(article =>
                <Card 
                key={article.id} 
                article={article}/>
                )}
        </main>
    )
}

export default CardList; 