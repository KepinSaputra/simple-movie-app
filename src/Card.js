import React from "react"
import "./App.css"

export default function Card({ movie }) {
  const imgURL = "https://image.tmdb.org/t/p/w200"
  return (
    <>
      <div className="card">
        <img className="image" src={`${imgURL}/${movie.poster_path}`} />
        <div className="cardContent">
          <h4>{movie.title}</h4>
          <h3>{movie.vote_average}</h3>
          <h3>{movie.release_date}</h3>
        </div>
      </div>
    </>
  )
}
