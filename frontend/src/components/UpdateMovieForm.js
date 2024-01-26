import React, { useState } from 'react';

const UpdateMovieForm = ({ movie, setShowForm, updateTrigger }) => {
    const [title, setTitle] = useState(movie.title);
    const [review, setReview] = useState(movie.review);
    const [rating, setRating] = useState(movie.rating);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/movies/' + movie._id, {
            method: 'PATCH',
            body: JSON.stringify({ title, review, rating }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            setShowForm(false); // hide the form when the update is successful
            updateTrigger(prevState => !prevState);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Review (max 140 symbols):
                <input type="text" value={review} onChange={e => setReview(e.target.value)} maxLength={140} />
            </label>
            <label>
                Rating:
                <input type="number"
                    min="1"
                    max="10"
                    step="1" value={rating} onChange={e => setRating(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UpdateMovieForm;