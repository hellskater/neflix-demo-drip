import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

const TitleList = ({ title, url, isTV, searchData }) => {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);

  const apiKey = "87dfa1c669eea853da609d4968d294be";

  useEffect(() => {
    loadContent();
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  const loadContent = () => {
    const requestUrl =
      "https://api.themoviedb.org/3/" + url + "&api_key=" + apiKey;

    axios
      .get(requestUrl)
      .then((val) => {
        setData(val.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let titles;

  if (searchData?.length > 0) {
    titles = searchData.map(function (title, i) {
      if (i < 5) {
        let name;
        const backDrop =
          "http://image.tmdb.org/t/p/original" + title.backdrop_path;
        if (!title.name) {
          name = title.original_title;
        } else {
          name = title.name;
        }

        return (
          <Item
            key={title.id}
            title={name}
            score={title.vote_average}
            overview={title.overview}
            backdrop={backDrop}
            titleId={title}
            isTV={isTV}
            mediaType={title.media_type}
          />
        );
      }
    });
  } else if (data.results) {
    titles = data.results.map(function (title, i) {
      if (i < 5) {
        let name;
        const backDrop =
          "http://image.tmdb.org/t/p/original" + title.backdrop_path;
        if (!title.name) {
          name = title.original_title;
        } else {
          name = title.name;
        }

        return (
          <Item
            key={title.id}
            title={name}
            score={title.vote_average}
            overview={title.overview}
            backdrop={backDrop}
            titleId={title}
            isTV={isTV}
            mediaType={title.media_type}
          />
        );
      }
    });
  } else {
    titles = "";
  }

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{title}</h1>
        <div className="titles-wrapper">{titles}</div>
      </div>
    </div>
  );
};

export default TitleList;
