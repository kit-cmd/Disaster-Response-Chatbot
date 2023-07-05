import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Mypage, Account, Realtime, Predict } from './pages';

import './styles/App.css';

function App() {
  return (
    <>
      <Router>
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
