import { useState } from 'react'
import { useMoviesContext } from '../hooks/useMoviesContext'

const MovieForm = () => {
  const { dispatch } = useMoviesContext()

  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const movie = {title, review, rating}
    
    const response = await fetch('/api/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setReview('')
      setRating('')
      dispatch({type: 'CREATE_MOVIE', payload: json})
    }

  }

  return (
    <form className="create movie-form" onSubmit={handleSubmit}> 
      {/* <h3>Add a Movie Review</h3> */}
      <label>Movie Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Review (max 140 symbols):</label>
      <input 
        type="text" 
        onChange={(e) => setReview(e.target.value)} 
        value={review}
        className={emptyFields.includes('review') ? 'error' : ''}
        maxLength={140}
      />

      <label>Rating score:</label>
      <input 
        type="number"
        min="1"
        max="10"
        step="1"
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        className={emptyFields.includes('rating') ? 'error' : ''}
      />

      <button>Add a Movie Review</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default MovieForm