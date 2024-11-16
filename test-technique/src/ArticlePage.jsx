import React from 'react'
import "./styles/articlepage.css"

function ArticlePage({article, onBack}) {
  return (
    <div className="article-page">
      <div className="up-news">
        <button onClick={onBack} className="return">Retour</button>
        <p className="date-news">Date de publication : {new Date(article.publishedAt).toLocaleDateString()}</p>
      </div>
      <h1 className="title-news">{article.title}</h1>
      <div className="cover-img">
        <img src={article.urlToImage} alt={article.title} className="img-news"/>
      </div>
      <p className="desc-news">{article.description}</p>
      <p className="content-news">{article.content}</p>
      <div className="bottom-news">
        <button className="url-news"><a href={article.url} target='_blank'>En Savoir plus</a></button>
      </div>
    </div>
  )
}

export default ArticlePage