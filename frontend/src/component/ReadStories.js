import "../CSS Folder/main.css";
import React, { useState } from 'react';
import "../CSS Folder/ReadStories.css"
function ReadStories({movies}){
    console.log(movies)
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
    };

    const clearFilters = () => {
        setSelectedCategory('');
        setSelectedRating('');
    };

    

    const filteredMovies = movies.filter((movie) => {
        const matchesCategory = selectedCategory === '' || movie.category === selectedCategory;
        const matchRatings = selectedRating==='' || (movie.Rating === selectedRating);
    
    return matchRatings && matchesCategory;
    });

    console.log(filteredMovies)

    return (
        <div>
        <div style={{ marginBottom: '15px' }}>
            <label htmlFor="categoryFilter">Filter By category: </label>
            <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
            </select>

            <label htmlFor="RatingFilter" style={{ marginLeft: '15px' }}>
                Filter by Status:
            </label>
            <select id="statusFilter" value={selectedRating} onChange={handleRatingChange}>
                <option value="">SELECT</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button style={{ marginLeft: '15px', padding: '5px 10px', cursor: 'pointer' }} onClick={clearFilters}>
                clearFilters
            </button>
        </div><ul className="movie-list">
                {filteredMovies.map((movie, index) => (
                    <li key={index} className="movie-item">
                        <img src={movie.image} alt={movie.title} />
                        <div className="movie-details">
                            <span>
                                <strong>Title:</strong> {movie.title}
                            </span>
                            <span className={movie.Rating}>Rating</span>
                            <span>
                                <strong>category:</strong> {movie.category}
                            </span>
                            <span>
                                <strong>Autohr:</strong> {movie.author.name} ({movie.author.email})
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                      <img src="your-logo-url-here" alt="Brand Logo" className="footer-logo" />
                      <p className="address">
                        Address:<br/>
                        123 Main Street, City<br/>
                        State Province, County
                      </p>
                      <div className="social-icons">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                      </div>
                    </div>
                </div>
                <div className="footer-bottom">
                  <p>© 2024 Your Website. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </div>
            </div>
        </footer>
        </div>

      );
}

export default ReadStories;

