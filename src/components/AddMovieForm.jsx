import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const AddMovieForm = () => {
  const history = useHistory();

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://nextgen-project.onrender.com/api/s11d3/movies", movie)
      .then((response) => {
        history.push("/movies");
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
      });
  };

  const { title, director, genre, metascore, description } = movie;

  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <form onSubmit={handleSubmit}>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to="/movies" className="myButton bg-zinc-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Değişiklikleri Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
