import React from 'react';
import Sidebar from './Sidebar'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '16px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
