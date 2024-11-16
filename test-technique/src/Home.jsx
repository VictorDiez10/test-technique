import CardNews from "./components/CardNews"
import "./styles/home.css"


function Home({news, setSelectedArticle}) {
  console.log(news)
  return (
    <>
      <div className="card-container">
                {news?.articles?.map((article) => (
                    article.urlToImage !== null && (
                        <div 
                            className="card-click" 
                            key={article.url} 
                            onClick={() => setSelectedArticle(article)}
                             // Sélectionne l'article
                        >
                            <CardNews article={article} onArticleClick={setSelectedArticle}  />
                        </div>
                    )
                ))}
                </div>
    </>
  )
}

export default Home
