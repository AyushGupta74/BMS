import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar /> {/* Include the Sidebar component */}
      </div>
    </div>
  );
};

export default Home;