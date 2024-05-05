// import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Shared/Layout';

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Root;