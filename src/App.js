import React, { useState } from "react";
import "./styles.css";

import SeatAvailability from "./components/SeatAvailability";
import SeatMatrix from "./components/SeatMatrix";
import PriceCalculator from "./components/PriceCalculator";
import Header from "./components/Header";

import MovieContext from "./components/MovieContext";

const App = () => {
  const [movies, EditMovies] = useState({
    movieNames: {
      price: 100,
    },
    moviePrice: 100,
    totalSeats: 0,
    seatNumbers: [],
  });

  return (
    <div className="main container">
      <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
        <Header />
        <SeatMatrix />
        <SeatAvailability />
        <PriceCalculator />
        <button className="button">Book</button>
      </MovieContext.Provider>
    </div>
  );
};

export default App;
