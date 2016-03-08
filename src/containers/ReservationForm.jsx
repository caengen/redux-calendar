import React from 'react';
import { connect } from 'react-redux';

const getAvailableRooms = (rooms) => {
  return rooms;
};

const mapStateToProps = (state) => {
  return {
    rooms: getAvailableRooms(state.rooms),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Form = ({ rooms }) => {
  const roomsMarkup = rooms.map((room) => {
    return (
      <figure>
        <img src={room.img} alt={room.title}></img>
        <figcaption>{room.title}</figcaption>
      </figure>
    );
  });

  return (
    <div className='reservation-form'>
      <h1>Opprett ny reservasjon</h1>
      <h2>vis bruker her</h2>
      <form>
        <label>Reservasjon fra</label>
        <input type='date' name='start' />
        <label>til</label>
        <input type='date' name='end' />
        <br />
        <label>Tilgjengelige rom for perioden</label>
        {roomsMarkup}
        <details>not implemented</details>
        <label>Hvem skal du ha med?</label>
        <input type='number' name='guests' min='1' max='6' />
        <button type='submit'>Ferdig</button>
      </form>
    </div>
  );
};

const ReservationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default ReservationForm;
