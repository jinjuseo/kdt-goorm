import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../api/axios";
import "./searchPage.scss";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search); //
  };
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/movie?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
      console.log(request.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie?.id}>
                <div
                  onClick={() => {
                    navigate(`/${movie.id}`);
                  }}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>{`찾고자 하는 검색어 "${debouncedSearchTerm}" 에 맞는 영화가 없습니다.`}</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
};
export default SearchPage;
