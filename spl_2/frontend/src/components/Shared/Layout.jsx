// import React from 'react';
// import Navigation from './Navigation';
import Navigation from './Navigate';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;