import React from 'react';
import { FormCover } from './FormCover.jsx';

const mapStoreToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const ReservationForm = ({}) => (
  <div>
    <FormCover />
    <form className="reservation-form">
      Name:
      <br />
      <input type="text" name="name" />
      <br />
      Reservation
      <br />
      start:<input type="date" name="start" />
      end:<input type="date" name="end" />
      <br />
      Guests:
      <br />
      <input type="number" name="guests" min="1" max="6" />
      <br />
    </form>
  </div>
);
