import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance';

function Row({ title, fetchUrl, isPoster }) {
  console.log(isPoster);
  // console.log(title,fetchUrl);
  const base_url = "https://image.tmdb.org/t/p/original/";


  const [movies, setMovies] = useState([])                             //state creates to stire the responce data.result (array of 20 items)

  const fetchData = async () => {
    const responce = await instance.get(fetchUrl)
    // console.log(responce.data.results);                                     //useEffects are hooks in react which is used to handle side effect
    setMovies(responce.data.results)                           //stored inside data in result can be viewed using console.log(responce.data.results);  
  }
  console.log(movies);

  useEffect(() => {
    fetchData()
  }, [])                                     //first arugumnet should be a function and second argument should be a dependency    //here dependency is empty array

  return (
    <div className='row'>
      <h3>{title}</h3>
      <div className='movie-row'>
        {movies.map(item => (<img className={`movie ${isPoster ? 'movie-poster' : 'movie'}`} src={`${base_url}${isPoster ? item.poster_path : item.backdrop_path}`} alt="poster" />))}
      </div>

    </div>
  )
}

export default Row