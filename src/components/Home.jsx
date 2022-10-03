import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import axios from "axios";
import TitleList from "./TitleList";

function Home() {
  const apiKey = "87dfa1c669eea853da609d4968d294be";
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  if (data.results) {
    console.log(data);
  }

  const performSearch = (e) => {
    // stop form from submitting
    e.preventDefault();

    // Do the thing
    const requestUrl =
      "https://api.themoviedb.org/3/search/multi?query=" +
      searchText +
      "&api_key=" +
      apiKey;

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
    <div>
      <Header
        onSubmit={performSearch}
        searchText={searchText}
        setSearchText={(val) => setSearchText(val)}
      />
      <Hero />
      <TitleList
        title="Top TV picks for Jack"
        url="discover/tv?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Trending now"
        url="discover/movie?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Most watched in Horror"
        url="genre/27/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Sci-Fi greats"
        url="genre/878/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Comedy magic"
        url="genre/35/movies?sort_by=popularity.desc&page=1"
      />
    </div>
  );
}

export default Home;
