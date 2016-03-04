import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ReservationActions';
import { ReservationListItem } from './ReservationListItem.jsx';

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

const _ReservationList = ({ reservations }) => {
  const listItems = reservations.map((item) => {
    return (
      <ReservationListItem key={item.id} { ...item } />
    );
  });

  return (
    <section>
      <ul className="reservation-list">
        { listItems }
      </ul>
    </section>
  );
};

export const ReservationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ReservationList);
