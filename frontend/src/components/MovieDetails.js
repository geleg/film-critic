import React, { useState } from 'react';
import { useMoviesContext } from '../hooks/useMoviesContext';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import UpdateMovieForm from './UpdateMovieForm';

const MovieDetails = (props) => {
  const { dispatch } = useMoviesContext();
  const [showForm, setShowForm] = useState(false);
  const { movie } = props;

  const handleClick = async () => {
    const response = await fetch('/api/movies/' + movie._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_MOVIE', payload: json});
    }
  };

  const handleUpdate = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };
  
  return (
    <div className="movie-details">
      <h4>{movie.title}</h4>
      <p><strong>Short review: </strong>{movie.review}</p>
      <p><strong>Rating score: </strong>{movie.rating}</p>
      <button onClick={handleUpdate}>{showForm ? 'Hide' : 'Update'}</button>
      {showForm && <UpdateMovieForm movie={movie} setShowForm={setShowForm} updateTrigger={props.updateTrigger} />}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default MovieDetails;