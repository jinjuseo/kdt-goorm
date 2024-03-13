import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovie = async () => {
    try {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    } catch (e) {
      // console.log(e);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
};
export default DetailPage;
