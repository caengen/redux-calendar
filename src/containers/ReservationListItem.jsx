import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const getUserInitials = (userId, users) => {
  console.log(userId);console.log(users);
  return `${users[userId].firstName.charAt(0)}${users[userId].lastName.charAt(0)}`;
};

const guests = (guestIds, users) => {
  return guestIds.map((id) => {
    return (
      <li>
        <figure className='profile-fig'>
          <strong>{getUserInitials(id, users)}</strong>
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
        <header>
          <figure className='profile-fig'>
            <strong>{getUserInitials(reservation.reserverId, users)}</strong>
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
            <span></span>
          </div>
        </div>
    </li>
  );
};

export const ReservationListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
