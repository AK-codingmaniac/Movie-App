import React, { useState,useEffect } from 'react';
import Movielist from './components/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielistheading from './components/Movielistheading';
import Searchbox from './components/Searchbox';
import Addfavourites from './components/Addfavourites';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchvalue,setsearchvalue] = useState('');

  const getMovieRequest = async(searchvalue)=>{
    const url = `http://www.omdbapi.com/?s=${searchvalue}&apikey=3e9b5587`
    
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search);

    if(responseJSON.Search)
    {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(()=>{
    getMovieRequest(searchvalue);
  }, [searchvalue]);


  return (

    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Movielistheading heading='Movies'/>
        <Searchbox searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>
      </div>
      <div className='row'>
      <Movielist movies={movies} favouritecomponent={Addfavourites}/>
      </div>
    </div>

  );
}

export default App;
