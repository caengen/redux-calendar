import React from 'react';
import ReservationForm from './ReservationForm.jsx';
import ReservationList from './ReservationList.jsx';
import NavigationBar from './NavigationBar.jsx';

const ReservationPage = () => (
  <div className="reservation-page">
    <NavigationBar />
    <ReservationList />
    <ReservationForm />
  </div>
);

export default ReservationPage;
