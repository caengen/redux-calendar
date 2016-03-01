import React from 'react';

const mapStoreToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const ReservationForm = ({}) => (
  <form className="reservation-form">
    Name:
    <br>
      <input type="text" name="name" />
    </br>
    Reservation start:
    <br>
      <input type="date" name="start" />
    </br>
    Reservation end:
    <br>
      <input type="date" name="end" />
    </br>
    Guests:
    <br>
      <input type="number" name="guests" min="1" max="6" />
    </br>
  </form>
);
