import { useState } from "react"
import { useEffect } from "react"
import { Container, Navbar } from "react-bootstrap"
import Card from "./Card"
import { getMovieList, searchMovie } from "./FetchMovieAPI"

function App() {
  const [playingMovie, setPlayingMovie] = useState([])

  const search = async (query) => {
    const searched = await searchMovie(query)
    if (query.length > 3) {
      setPlayingMovie(searched.results)
    }
  }

  useEffect(() => {
    getMovieList().then((res) => {
      setPlayingMovie(res)
    })
  }, [])

  return (
    <>
      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand>KevMovieApp</Navbar.Brand>
          <input
            type="text"
            placeholder="Search..."
            onChange={({ target }) => search(target.value)}
          />
        </Container>
      </Navbar>
      <div className="card-container">
        {playingMovie.map((movie, i) => {
          return <Card key={i} movie={movie} />
        })}
      </div>
    </>
  )
}

export default App
