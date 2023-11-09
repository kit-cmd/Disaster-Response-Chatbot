import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Realtime, Predict, Location } from './pages';
import { Sidebar } from './components/Sidebar';

import { createTheme, ThemeProvider } from '@mui/material';

// import "./Firebase"

import './styles/App.css';
import { Chatbot } from './components/Chatbot';
import { News } from './pages/News';

const theme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Sans KR', 'Noto Sans KR', sans-serif"
  }
})

const App = () => {

  // inside the jsx being returned:
  

  // const RequestNotificationPermission = () => {
  //   Notification.requestPermission().then(function (result) {
  //     if (result === 'granted') {
  //       console.log('알림이 허용되었습니다.');
  //     } else if (result === 'denied') {
  //       console.log('알림이 차단되었습니다.');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   RequestNotificationPermission();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/realtime" element={<Realtime />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
