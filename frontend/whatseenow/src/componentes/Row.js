import React, { useEffect, useState } from "react";
import axios from "./axios.js";
import "./row.css";

const urlbase = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  console.log(fetchUrl);
  console.log("holaaaaaa");
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      SetMovies(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <div className="imagenes">
        {movies.map((movie) => (
          <img
            className="imagenposter"
            src={urlbase + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
