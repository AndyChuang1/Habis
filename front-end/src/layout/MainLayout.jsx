import React from 'react';
import BottomNav from '../components/BottomNav';

function MainLayout({ children }) {
  return (
    <div id='main-layout'>
      {children}
      <BottomNav></BottomNav>
    </div>
  );
}

export default MainLayout;
