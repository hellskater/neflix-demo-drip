import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./MovieDetails.scss";
import { ImPlay2 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";

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
      <div className="header">
        <p className="genres">
          {data.genres?.map((val, index) => (
            <>
              {" "}
              <span>{val.name}</span>{" "}
              {data.genres.length - 1 !== index && <span>|</span>}
            </>
          ))}
        </p>
        <p className="languages">
          {data.spoken_languages?.map((val, index) => (
            <>
              {" "}
              <span>{val.english_name}</span>{" "}
              {data.spoken_languages.length - 1 !== index && <span>|</span>}
            </>
          ))}
        </p>
        <div className="runInfo">
          <FaPlay />
          <p className="mins">{data.runtime}+ mins</p>
        </div>
      </div>
      <ImPlay2 className="playIcon" />
      <div className="movieDetails">
        <p className="name">
          {data.name || data.original_name || data.original_title}
        </p>
        <p className="description">{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
