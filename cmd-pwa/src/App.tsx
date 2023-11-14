import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Realtime, Predict, Location } from './pages';
import { Sidebar } from './components/Sidebar';
import { getMessaging, getToken } from "firebase/messaging";
import { createTheme, ThemeProvider } from '@mui/material';
import { onMessage } from 'firebase/messaging';
import axios from 'axios';

import "./Firebase"
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

  useEffect(() => {
    // RequestNotificationPermission();
    async function registerToken() {
      const messaging = getMessaging();
      try {
          const token = await getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY as string });
          console.log('token', token);

          // 서버에 토큰 보내서 topic 구독하기
          await axios.post('http://ec2-15-164-230-207.ap-northeast-2.compute.amazonaws.com:8082/api/notification/register', token);
          
      } catch (error) {
          console.log('error', error);
      }
    }

    registerToken()

    const messaging = getMessaging();

    onMessage(messaging, (payload) => {
        console.log('Message received in foreground: ', payload);
        if (payload.data && payload.data.title && payload.data.body) {
          new Notification(payload.data.title, { body: payload.data.body });
      }
    });
  }, []);

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
