import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container-title">
        <img
          className="header__container-title-logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
          alt="netflixtracker-logo"
        />
        NetflixTracker.
      </div>
      <div className="header__container-search">
        <input type="text" placeholder="SEARCH SERIES" />
        <img
          src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-17.jpg"
          alt="search-btn"
        />
      </div>
    </div>
  );
};

export default Header;
