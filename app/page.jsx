// pages/YourPage.js

import React from 'react';
import Footer from '../components/Footer';
import OurServices from '../components/OurServices';
import techPartners from '../Components/techPartners';
import ServiceHeader from '../Components/ServiceHeader';
const YourPage = () => {
  return (
    <div>
      {/* Your page content */}
      <ServiceHeader />
      <OurServices />
      <techPartners />
    </div>
  );
};

export default YourPage;
