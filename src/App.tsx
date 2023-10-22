import React from 'react';
import 'src/css/reset.scss';
import 'src/css/global.scss';
import './App.css';
import PromoVideo from './features/PromoVideo/PromoVideo';
import PromoNumber from './features/PromoNumber/PromoNumber';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoStartTimeProvider from './providers/VideoStartTimeProvider';

function App() {
  return (
    <BrowserRouter>
      <VideoStartTimeProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<PromoVideo />} />
            <Route path="/promoNumber" element={<PromoNumber />} />
          </Routes>
        </div>
      </VideoStartTimeProvider>
    </BrowserRouter>
  );
}

export default App;
