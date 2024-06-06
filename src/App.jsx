import './App.css'
import Cover from './Components/Cover'
import Nav from './Components/Nav'
import Row from './Components/Row'
import requests from './request'

function App() {

  return (
    <>
      <Nav/>   
      <Cover fetchUrl={requests.fetchNetflixOriginals} />
      <Row isPoster title='Trending' fetchUrl={requests.fetchTrending} />                                          {/*fetch url is a key*/}
      <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default App
