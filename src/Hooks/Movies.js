import axios from "axios";
import { useEffect, useState } from "react";

export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=21aede262134f84818704e9a0b42d9bf`,
            { headers: { accept: "application/json" } }
          )
          .then((res) => {
            console.log(res.data);
            setTrendingMovies(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return trendingMovies;
};
