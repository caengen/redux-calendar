import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ReservationActions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const ListFilter = () => {
  return (
    <header className='reservation-list-filter'>
      <h2>Reservations</h2>
      <div>
        <a href='#'>
          All
        </a>
        <a href='#'>
          My
        </a>
      </div>
    </header>
  );
};

export const ReservationListFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilter);
