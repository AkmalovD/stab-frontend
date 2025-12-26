'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { citiesData } from '@/utils/data';
import { motion } from 'framer-motion';

interface DestinationCardProps {
  city: {
    id: string;
    name: string;
    country: string;
    imageUrl: string;
    flag: string;
    costOfLiving: string;
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ city }) => {
  const router = useRouter();

  const handleExplore = () => {
    router.push(`/compare?city=${encodeURIComponent(city.name)}`);
  };

  return (
    <motion.div 
      className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.imageUrl}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Flag */}
        <div className="absolute top-4 right-4 text-3xl">
          {city.flag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0d171b] mb-1">
          {city.name}
        </h3>
        <p className="text-sm text-[#4c809a] mb-3">
          {city.country}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Cost of Living</p>
            <p className="text-lg font-bold text-[#0d98ba]">
              {city.costOfLiving}
            </p>
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={handleExplore}
          className="w-full py-2 bg-[#f8fafc] text-[#0d98ba] rounded-lg font-semibold hover:bg-[#0d98ba] hover:text-white transition-colors"
        >
          Explore {city.name}
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedDestinations: React.FC = () => {
  const router = useRouter();
  
  // Get first 6 cities
  const featuredCities = citiesData.slice(0, 6);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-10 lg:px-40 py-16 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d171b] mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-[#4c809a]">
              Explore the most popular study abroad destinations
            </p>
          </div>
          <button
            onClick={() => router.push('/compare')}
            className="hidden md:block px-6 py-3 border-2 border-[#0d98ba] text-[#0d98ba] rounded-lg font-semibold hover:bg-[#0d98ba] hover:text-white transition-colors"
          >
            View All Cities
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCities.map((city) => (
            <DestinationCard key={city.id} city={city} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
          <button
            onClick={() => router.push('/compare')}
            className="px-6 py-3 border-2 border-[#0d98ba] text-[#0d98ba] rounded-lg font-semibold hover:bg-[#0d98ba] hover:text-white transition-colors"
          >
            View All Cities
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedDestinations;
