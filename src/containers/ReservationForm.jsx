import React from 'react';
import { connect } from 'react-redux';
import { FormCover } from './FormCover.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Form = ({}) => (
  <header className="reservation-form">
    <form>
      Navn:
      <br />
      <input type="text" name="name" />
      <br />
      Reservasjon
      <br />
      start:<input type="date" name="start" />
      slutt:<input type="date" name="end" />
      <br />
      Gjester:
      <br />
      <input type="number" name="guests" min="1" max="6" />
      <br />
    </form>
  </header>
);

export const ReservationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
