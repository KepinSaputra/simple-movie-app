import axios from "axios"
const baseURL = "https://api.themoviedb.org/3"
const apiKEY = "ebbbf1add7e3730d42bcffbc66b90361"

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseURL}/movie/now_playing?api_key=${apiKEY}`
  )
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&api_key=${apiKEY}`
  )
  return search.data
}
