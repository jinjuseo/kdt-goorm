import React, { useState, useEffect } from "react";
import { axios } from "../../api/axios";
import "./row.scss";
import { MovieModal } from "../";
const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, id, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };
  const onClickMovie = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies?.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              loading="lazy"
              alt={movie.name}
              onClick={() => {
                onClickMovie(movie);
              }}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal
          base_url={BASE_URL}
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </section>
  );
};

export default Row;
