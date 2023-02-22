import React from "react";

const Movie = ({ movie }) => {
  return (
    <li className="movie_list">
      <div
        key={movie.id}
        className="img_area"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`,
        }}
      >
        <div className="movie_description">
          <div className="inner">
            <p className="desc_title">{movie.overview}</p>
            <p className="desc_date">{movie.release_date}</p>
          </div>
        </div>
        <span className="movie_rating">{movie.vote_average}</span>
      </div>
      <div className="title_area">
        <p className="movie_title">{movie.title}</p>
      </div>
    </li>
  );
};

export default Movie;
