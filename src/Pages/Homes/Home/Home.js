import React from 'react';
import UseTitle from '../../../Title/UseTitle';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';

const Home = () => {
  UseTitle("");
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
    </div>
  );
};

export default Home;