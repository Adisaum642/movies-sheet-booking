import React from "react";
import Seat from "./Seat";
import "./styles/Seat.css";

const GenerateSeats = (seatNumbers) => {
  return (
    <div className="row">
      {seatNumbers.map((seatNumber) => {
        return <Seat seatno={seatNumber} key={seatNumber} />;
      })}
    </div>
  );
};

const SeatMatrix = () => {
  return (
    <div className="movie-complex">
      <p>Screen This way</p>
      <div className="container row movie-layout">
        <div className="movie-column-1">
          {GenerateSeats([1, 2, 3, 4, 5])}
          {GenerateSeats([6, 7, 8, 9, 10])}
          {GenerateSeats([11, 12, 13, 14, 15])}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
