import React from "react";
import Rating from "../../Rating/Rating";
import Series from "../../Series.tsx/Series";
import Statistics from "../../Statistics/Statistics";
import "./Main.css";

const Main = () => {
  return (
    <div className="main__container">
      <div className="series__container section main__col1">
        <Series />
      </div>
      <div className="main__col2">
        <div className="rating__container section">
          <Rating />
        </div>
        <div className="statistics__container section">
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Main;
