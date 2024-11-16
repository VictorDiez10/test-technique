import React from 'react'
import "../styles/cardnews.css"

function CardNews({article, onArticleClick}) {

    
  return (
    <>
    <div className="card-overlay" onClick={() => onArticleClick(article)}></div>
    <div className="card-date">{new Date(article.publishedAt).toLocaleDateString()}</div>
                <img src={article.urlToImage} alt={article.title} className="card-img"/>
        <div className="card-title">{article.title}</div>
    </>
  )
}

export default CardNews