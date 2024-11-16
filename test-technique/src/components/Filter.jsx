import React from 'react'
import "../styles/filter.css"

function Filter({setCategory}) {

    const data = [
        {
            category : "business"
        },
        {
            category : "entertainment"
        },
        {
            category : "health"
        },
        {
            category: "science"
        },
        {
            category: "sports"
        },
        {
            category: "technology"
        },

    ]

    

  return (
    <div className="category-container">{data.map((cat) => (
        (
            <div key={cat.category} className="category" onClick={()=> setCategory(`${cat.category}`)}>{cat.category}</div>
        )
    ))}</div>
  )
}

export default Filter