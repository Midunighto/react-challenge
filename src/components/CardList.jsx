import Card from "./Card"
import data from "../data/data.json";

function CardList({selectedCategory}){
    const filteredData = selectedCategory ? data.filter((article) => article.category === selectedCategory) : data
    return(
        <main >
            <h2>The latest parts </h2>
            <div className="cards-list">
            {filteredData.map(article =>
                <Card 
                key={article.id} 
                article={article}
                category={article.category}
                price={article.price}/>
            )}
            </div>
        </main>
    )
}

export default CardList; 