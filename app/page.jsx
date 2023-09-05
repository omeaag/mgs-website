// pages/YourPage.js

import React from 'react';
import Footer from '../components/Footer';
import OurServices from '../components/OurServices';
import techPartners from '../Components/techPartners';

const YourPage = () => {
  return (
    <div>
      {/* Your page content */}
      <OurServices />
      <techPartners />
    </div>
  );
};

export default YourPage;
