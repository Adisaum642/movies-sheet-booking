import React, { useContext } from "react";
import MovieContext from "./MovieContext";
import "./styles/Seat.css";

const PriceCalculator = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="selector">
      <p>
        Selected {movies.totalSeats} seats and the total price is Rs.
        {movies.totalSeats * movies.moviePrice}
      </p>
    </div>
  );
};

export default PriceCalculator;
