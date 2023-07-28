import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Mypage, Account, Realtime, Predict } from './pages';
import { Sidebar } from './components/Sidebar';

import './styles/App.css';
import { Chatbot } from './components/Chatbot';

function App() {
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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
