import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  if (!movie) return <p>Loading movie...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Duration: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "8px" }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
