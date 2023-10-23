import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PromoVideo from '../features/PromoVideo/PromoVideo';
import PromoNumber from '../features/PromoNumber/PromoNumber';

type TRouterProps = {};

const Router: React.FC<TRouterProps> = ({}) => {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PromoVideo />} />
          <Route path="/promo-number" element={<PromoNumber />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default Router;
