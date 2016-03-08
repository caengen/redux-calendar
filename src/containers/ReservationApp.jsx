import React from 'react';
import { ReservationForm } from './ReservationForm.jsx';
import { ReservationList } from './ReservationList.jsx';
import { NavigationBar } from './NavigationBar.jsx';

const ReservationApp = () => (
  <div className="app">
    <NavigationBar />
    <ReservationList />
    <ReservationForm />
  </div>
);

export default ReservationApp;
