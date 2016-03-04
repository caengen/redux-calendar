import React from 'react';
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
      <div className='list-item'>
        <figure className='profile-fig'>
          <strong>{getUserInitials(reservation.reserverId, users)}</strong>
        </figure>
        <div>
          <strong>{`${users[reservation.reserverId].firstName}
            ${users[reservation.reserverId].lastName}`}</strong>
          <small>{reservation.timestamp}</small>
          <span>{rooms[reservation.roomId].title}</span>
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
