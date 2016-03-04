import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const name = (userId, users) => {
  return `${users[userId].firstName} ${users[userId].lastName}`;
};

const initials = (name) => {
  return name.split(' ').map((s) => { return s.charAt(0); });
};

const guests = (guestIds, users) => {
  return guestIds.map((id) => {
    return (
      <li key={id} title={name(id, users)} className='li-guests'>
        <figure>
          <strong>{initials(name(id, users))}</strong>
        </figure>
      </li>
    );
  });
};

const pretty = (time) => {
  return moment(time, 'DD-MM-YYYY').format('MMM Do');
};

const mapStateToProps = (state, ownProps) => {
  return {
    reservation: { ...ownProps },
    users: state.users,
    rooms: state.rooms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ListItem = ({ reservation, users, rooms }) => {
  return (
    <li>
        <header className='reservation'>
          <figure>
            <strong>{initials(name(reservation.reserverId, users))}</strong>
          </figure>
        </header>
        <div className='li-content'>
          <div className='reserver'>
            <span>{`${users[reservation.reserverId].firstName}
              ${users[reservation.reserverId].lastName}`}</span>
            <small>{pretty(reservation.timestamp)}</small>
          </div>
          <div className='room'>
            <span>{rooms[reservation.roomId].title}</span>
            <small>{`${pretty(reservation.date.start)} - ${pretty(reservation.date.end)}`}</small>
          </div>
          <div className='guests'>
            <span className='label'>{'Gjester: '}</span>
            <ul className='ul-guests'>
              {guests(reservation.guestIds, users)}
            </ul>
          </div>
        </div>
    </li>
  );
};

export const ReservationListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
