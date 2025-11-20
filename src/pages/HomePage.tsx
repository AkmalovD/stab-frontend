'use client'

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedDestinations from '../components/FeaturedDestinations';
import KeyFeatures from '../components/KeyFeatures';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-[65px]">
        <Hero />
        <HowItWorks />
        <FeaturedDestinations />
        <KeyFeatures />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;