import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ReservationActions';
import { ReservationListFilter } from './ReservationListFilter.jsx';
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
    <div className="reservation-list">
      <ReservationListFilter />
      <section>
        <ul>
          { listItems }
        </ul>
      </section>
    </div>
  );
};

export const ReservationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ReservationList);
