import React, { useEffect, useState } from 'react';
import MovieDetails from '../components/MovieDetails';
import MovieForm from '../components/MovieForm';
import { useMoviesContext } from '../hooks/useMoviesContext';

const Home = () => {
  const { movies, dispatch } = useMoviesContext();
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_MOVIES', payload: json});
      }
    };

    fetchMovies();
  }, [dispatch, updateTrigger]);

  return (
    <div className="home">
      <div className='inputMovie'>
        <MovieForm />
      </div>
      <div className="movies movie-list">
        {movies && movies.map(movie => (
          <MovieDetails movie={movie} key={movie._id} updateTrigger={setUpdateTrigger} />
        ))}
      </div>
      
      
    </div>
  );
};

export default Home;