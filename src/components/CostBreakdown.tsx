import React from 'react';
import { City } from '../types';

interface CostBreakdownProps {
  cities: City[];
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ cities }) => {
  const costCategories = [
    { key: 'housing' as keyof City['costBreakdown'], label: 'Housing', icon: '🏠' },
    { key: 'food' as keyof City['costBreakdown'], label: 'Food', icon: '🍽️' },
    { key: 'transport' as keyof City['costBreakdown'], label: 'Transport', icon: '🚌' },
    { key: 'entertainment' as keyof City['costBreakdown'], label: 'Entertainment', icon: '🎭' },
    { key: 'utilities' as keyof City['costBreakdown'], label: 'Utilities', icon: '💡' },
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-[#0d171b] mb-6">
        Monthly Cost Breakdown
      </h3>
      <div className="space-y-6">
        {costCategories.map(category => (
          <div key={category.key} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium text-[#0d171b]">{category.label}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map(city => (
                <div key={city.id} className="flex justify-between items-center p-3 bg-[#f8fafc] rounded-lg">
                  <span className="text-sm text-[#4c809a]">{city.name}</span>
                  <span className="font-semibold text-[#0d171b]">
                    ${Number(city.costBreakdown[category.key]) || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostBreakdown;