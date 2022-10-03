import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./MovieDetails.scss";
import { BiPlayCircle } from "react-icons/bi";

const MovieDetails = () => {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({});
  let { id } = useParams();
  const location = useLocation();

  const apiKey = "87dfa1c669eea853da609d4968d294be";

  console.log(data);

  useEffect(() => {
    loadContent();
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  const loadContent = () => {
    const key = location.pathname.split("/")[1];
    const requestUrl =
      `https://api.themoviedb.org/3/${key}/` + id + "?api_key=" + apiKey;

    console.log(requestUrl);

    axios
      .get(requestUrl)
      .then((val) => {
        setData(val.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div data-loaded={mounted} className="movieDetailsContainer">
      <img
        src={"http://image.tmdb.org/t/p/original" + data.backdrop_path}
        alt="movie/tv title"
        className="bannerImg"
      />
      <BiPlayCircle className="playIcon" />
    </div>
  );
};

export default MovieDetails;
