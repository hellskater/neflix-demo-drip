import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Header = ({ onSubmit, searchText, setSearchText }) => {
  return (
    <header className="Header">
      <Logo />
      <Navigation />
      <Search
        onSubmit={onSubmit}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <UserProfile />
    </header>
  );
};

export default Header;
