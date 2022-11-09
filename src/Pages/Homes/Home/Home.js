import React from 'react';
import UseTitle from '../../../Title/UseTitle';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Pakage from '../Package/Pakage';

const Home = () => {
  UseTitle("");
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Pakage></Pakage>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;