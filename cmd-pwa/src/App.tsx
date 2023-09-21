import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Realtime, Predict, Location } from './pages';
import { Sidebar } from './components/Sidebar';


import "./Firebase"

import './styles/App.css';
import { Chatbot } from './components/Chatbot';

const App = () => {

  // inside the jsx being returned:
  

  const RequestNotificationPermission = () => {
    Notification.requestPermission().then(function (result) {
      if (result === 'granted') {
        console.log('알림이 허용되었습니다.');
      } else if (result === 'denied') {
        console.log('알림이 차단되었습니다.');
      }
    });
  }

  useEffect(() => {
    RequestNotificationPermission();
  }, []);

  return (
    <>
      <Router>
        <Sidebar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/realtime" element={<Realtime />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
