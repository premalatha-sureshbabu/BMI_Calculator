import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the BMI Calculator!</h1>
      <p>Click below to calculate your BMI.</p>
      <Link to="/calculator">Go to Calculator</Link>
    </div>
  );
};

export default Home;
