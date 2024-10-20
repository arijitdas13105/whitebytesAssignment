

import React from 'react';

const ProgressBarChart = () => {
  const progressData = [
    { label: "HTML Tools, Forms, History", percentage: 80, color: "text-blue-500 bg-blue-500" },
    { label: "Tags & References in HTML", percentage: 60, color: "text-orange-400 bg-orange-400" },
    { label: "Tables & References in HTML", percentage: 24, color: "text-red-500 bg-red-500" },
    { label: "Tables & CSS Basics", percentage: 96, color: "text-green-500 bg-green-500" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {progressData.map((item, index) => (
        <div key={index}>
          <span className={`flex-1 text-sm `}>{item.label}</span>
          <div className='flex items-center gap-24'>
            <div className="w-1/2 h-2 bg-gray-300 rounded overflow-hidden">
              <div
                className={`h-full ${item.color.split(' ')[1]} transition-all duration-300`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span className={`font-bold text-sm ${item.color.split(' ')[0]}`}>{item.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBarChart;
