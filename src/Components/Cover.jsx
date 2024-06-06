import React, { useEffect, useState } from 'react'
import './Cover.css'
import instance from '../instance';


function Cover({ fetchUrl }) {
  console.log(fetchUrl);
  //to store the data, a state is created
  const [movie, setMovie] = useState({})         //{} is there because the data is object  {}=empty object
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const responce = await instance.get(fetchUrl)                                                      //(Math.random()*7)  randomly generate upto 7
    // console.log(responce);
    // console.log(responce.data.results[Math.floor(Math.random()*responce.data.results.length-1)]);      //math.random for random object generation
    setMovie(responce.data.results[Math.floor(Math.random() * responce.data.results.length - 1)])
  }                                                                                                    //Math.random()*index of array   math.floor is to remove decimal

  console.log(movie);

  useEffect(() => {
    fetchData()
  }, [])

  return (                                                                    ////movie.backdrop_path is because the the poster is saved inside the backdrop_path which is inside the state movie we created
    <div className='cover' style={{ height: '600px', backgroundImage: `url(${base_url}${movie.backdrop_path}`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>

      <div className="banner-details">
        <h1>{movie.name}</h1>
        <button className='btn btn-danger'>Play</button>
        <button className='btn btn-outline-light ms-4'>More info</button>
        <h3>{movie.overview?.slice(0,170)}...</h3>
      </div>
    </div> 
  )
}

export default Cover
