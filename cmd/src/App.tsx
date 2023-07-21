import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Info, Mypage, Account, Realtime, Predict } from './pages';
import { Sidebar } from './components/Sidebar';

import './styles/App.css';
import { Location } from './pages/Location/Location';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/realtime" element={<Realtime />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/account" element={<Account />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
