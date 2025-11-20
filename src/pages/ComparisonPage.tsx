'use client'

import React from 'react';
import Header from '../components/Header';
import CityComparison from '../components/CityComparison';
import Footer from '../components/Footer';

const ComparisonPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        <CityComparison />
      </main>
      <Footer />
    </>
  );
};

export default ComparisonPage;