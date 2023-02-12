import React from "react";
import Seat from "./Seat";
import "./styles/Seat.css";

const SeatAvailability = () => {
  return (
    <div className="row">
      Unoccupied : <Seat seatColor="seat-grey" />
      Occupied : <Seat seatColor="seat-blue" />
    </div>
  );
};

export default SeatAvailability;
