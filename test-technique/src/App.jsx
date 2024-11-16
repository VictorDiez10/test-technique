import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import ArticlePage from './ArticlePage'
import Home from './Home'



function App() {
    const [category, setCategory] = useState("")
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [news, setNews] = useState([])

    const getNews = () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=270b91439deb49e4bca74d608c731b6c`
        fetch(url)
        .then(response => response.json())
        .then(json => setNews(json))
        .catch((error) => console.error("Erreur lors de la récupération des articles:", error));
    }
    
    
        useEffect(() => {
            getNews()
        },[category])

        console.log(news)

return (
    <>
        {selectedArticle ? (
            // Si un article est sélectionné, afficher la page Article
            <ArticlePage 
                article={selectedArticle} 
                onBack={() => setSelectedArticle(null)} 
            />
        ) : (
            // Sinon, afficher la liste des articles
            <>
                
                <Filter setCategory={setCategory}/>
                <Home news={news} setSelectedArticle={setSelectedArticle}/>
            </>
        )}
</>

)
}

export default App