'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { City } from '../types';
import { citiesData, searchCities } from '../utils/data';
import CityCard from './CityCard';
import CostBreakdown from './CostBreakdown';
import CurrencyConverter from './CurrencyConverter';
import VisualComparison from './VisualComparison';

const CityComparison: React.FC = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [availableCities] = useState<City[]>(citiesData);
  const searchParams = useSearchParams();

  // Handle URL parameters for pre-selection
  useEffect(() => {
    const searchQuery = searchParams?.get('search');
    const cityQuery = searchParams?.get('city');
    
    if (searchQuery) {
      const foundCities = searchCities(searchQuery);
      if (foundCities.length > 0) {
        setSelectedCities([foundCities[0].id]);
      }
    } else if (cityQuery) {
      const foundCity = availableCities.find(city => 
        city.name.toLowerCase() === cityQuery.toLowerCase()
      );
      if (foundCity) {
        setSelectedCities([foundCity.id]);
      }
    }
  }, [searchParams, availableCities]);

  const handleCitySelect = (cityId: string) => {
    setSelectedCities(prev => {
      if (prev.includes(cityId)) {
        return prev.filter(id => id !== cityId);
      } else {
        // Limit to maximum 4 cities for better comparison
        if (prev.length >= 4) {
          return [prev[1], prev[2], prev[3], cityId]; // Remove first, add new
        }
        return [...prev, cityId];
      }
    });
  };

  const selectedCityData = availableCities.filter(city => 
    selectedCities.includes(city.id)
  );

  const clearSelection = () => {
    setSelectedCities([]);
  };

  return (
    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight">
              City Comparison Dashboard
            </h1>
            <p className="text-[#4c809a] text-sm font-normal leading-normal max-w-2xl">
              Compare the cost of living and other factors between your chosen cities to make an informed decision about your study abroad destination. Select up to 4 cities for detailed comparison.
            </p>
          </div>
          
          {selectedCities.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="text-sm text-[#4c809a]">
                {selectedCities.length} cit{selectedCities.length !== 1 ? 'ies' : 'y'} selected
              </div>
              <button
                onClick={clearSelection}
                className="px-4 py-2 text-sm font-medium text-[#13a4ec] hover:bg-[#13a4ec]/10 rounded-lg transition-colors duration-200"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* City Selection Grid */}
        <section className="mb-8">
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
            Select Cities to Compare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {availableCities.map(city => (
              <CityCard
                key={city.id}
                city={city}
                isSelected={selectedCities.includes(city.id)}
                onSelect={() => handleCitySelect(city.id)}
              />
            ))}
          </div>
        </section>

        {/* Comparison Results */}
        {selectedCityData.length > 0 && (
          <>
            {/* Cost Breakdown Section */}
            <section className="mb-8">
              <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
                Cost Breakdown Comparison
              </h2>
              <CostBreakdown cities={selectedCityData} />
            </section>

            {/* Visual Comparison Section */}
            <section className="mb-8">
              <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
                Visual Cost Analysis
              </h2>
              <VisualComparison cities={selectedCityData} />
            </section>
          </>
        )}

        {/* Currency Converter - Always visible */}
        <section className="mb-8">
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4">
            Currency Converter
          </h2>
          <CurrencyConverter />
        </section>

        {/* Empty State */}
        {selectedCityData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-[#0d171b] mb-2">
              Start Your Comparison
            </h3>
            <p className="text-[#4c809a] text-center max-w-md">
              Select cities from the grid above to see detailed cost comparisons, living expenses, and educational opportunities.
            </p>
          </div>
        )}

        {/* Tips Section */}
        {selectedCityData.length > 0 && (
          <section className="bg-[#f8fafc] rounded-xl p-6 mt-8">
            <h3 className="text-[#0d171b] text-lg font-bold mb-4">
              💡 Comparison Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#4c809a]">
              <div>
                <strong className="text-[#0d171b]">Budget Planning:</strong> Consider all expenses including accommodation, food, transport, and tuition fees.
              </div>
              <div>
                <strong className="text-[#0d171b]">Currency Fluctuation:</strong> Exchange rates can change significantly over time - plan for variations.
              </div>
              <div>
                <strong className="text-[#0d171b]">Hidden Costs:</strong> Don't forget visa fees, insurance, books, and emergency funds.
              </div>
              <div>
                <strong className="text-[#0d171b]">Quality of Life:</strong> Consider climate, culture, language, and social opportunities beyond just costs.
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CityComparison;