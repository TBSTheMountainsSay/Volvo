import React from 'react';
import 'src/css/reset.scss';
import 'src/css/global.scss';
import './App.css';
import PromoVideo from './features/PromoVideo/PromoVideo';
import PromoNumber from './features/PromoNumber/PromoNumber';
import { Routes, Route, HashRouter } from 'react-router-dom';
import VideoStartTimeProvider from './providers/VideoStartTimeProvider';

function App() {
  return (
    <HashRouter>
      <VideoStartTimeProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<PromoVideo />} />
            <Route path="/promo-number" element={<PromoNumber />} />
          </Routes>
        </div>
      </VideoStartTimeProvider>
    </HashRouter>
  );
}

export default App;
