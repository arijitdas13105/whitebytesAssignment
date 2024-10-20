

// import { Line } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// const LineChart = () => {
//   const { rank, percentile, correctAnswers, totalQuestions } = useSelector((state) => state.statistics);

//   const yourPercentile = percentile; // Example custom percentile
//   const averagePercentile = 72;

//   // Percentiles (X-axis labels) - we only want to show 25, 50, 75, 100
//   const displayedPercentiles = [25, 50, 75, 100];

//   // Full labels list for data interpolation (contains all relevant points)
//   const fullLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//   const labels = Array.from(new Set([...fullLabels, yourPercentile, averagePercentile])).sort((a, b) => a - b);

//   // Simulated number of students data (Y-axis)
//   const numberOfStudentsData = [1, 2, 3, 4, 6, 10, 8, 7, 6, 4, 2]; 

//   // Interpolating the number of students for 'yourPercentile' and 'averagePercentile'
//   const interpolatedData = labels.map((label, index) => {
//     const baseIndex = fullLabels.indexOf(label);
//     if (baseIndex !== -1) {
//       return numberOfStudentsData[baseIndex]; // Use exact values from numberOfStudentsData
//     } else {
//       // Linear interpolation between existing points
//       const lowerIndex = fullLabels.findIndex(baseLabel => baseLabel < label && fullLabels[fullLabels.indexOf(baseLabel) + 1] > label);
//       const upperIndex = lowerIndex + 1;
//       const lowerPercentile = fullLabels[lowerIndex];
//       const upperPercentile = fullLabels[upperIndex];
//       const lowerValue = numberOfStudentsData[lowerIndex];
//       const upperValue = numberOfStudentsData[upperIndex];
//       const interpolatedValue = lowerValue + (label - lowerPercentile) * (upperValue - lowerValue) / (upperPercentile - lowerPercentile);
//       return interpolatedValue;
//     }
//   });

//   const data = {
//     labels, // X-axis: Percentiles (with interpolated values)
//     datasets: [
//       {
//         label: 'Number of Students',
//         data: interpolatedData, // Y-axis: Number of students per percentile
//         borderColor: 'rgba(99, 132, 255, 1)', // Line color
//         backgroundColor: 'rgba(99, 132, 255, 0.2)', // Line fill color
//         fill: true,
//         pointRadius: 6,
//         pointBackgroundColor: (ctx) => {
//           const index = ctx.dataIndex;
//           if (labels[index] === yourPercentile) return 'rgba(255, 99, 132, 1)'; // Highlight 'your percentile'
//           if (labels[index] === averagePercentile) return 'rgba(75, 192, 192, 1)'; // Highlight 'average percentile'
//           return 'rgba(99, 132, 255, 1)'; // Default point color
//         },
//         pointBorderColor: 'white',
//         pointBorderWidth: 2,
//         tension: 0.4, // Smooth curve
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Hide legend
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `Percentile: ${tooltipItem.label}, Number of Students: ${tooltipItem.raw.toFixed(2)}`;
//           },
//         },
//       },
//       title: {
//         display: true,
//         text: 'Comparison Graph',
//         font: {
//           size: 18,
//         },
//       },
//       annotation: {
//         annotations: {
//           yourPercentileLine: {
//             type: 'line',
//             scaleID: 'x',
//             value: yourPercentile,
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 2,
//             label: {
//               content: 'Your Percentile',
//               enabled: true,
//               position: 'start',
//               backgroundColor: 'rgba(255, 99, 132, 0.8)',
//               color: 'white',
//             },
//           },
//           averagePercentileLine: {
//             type: 'line',
//             scaleID: 'x',
//             value: averagePercentile,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 2,
//             label: {
//               content: 'Average Percentile',
//               enabled: true,
//               position: 'start',
//               backgroundColor: 'rgba(75, 192, 192, 0.8)',
//               color: 'white',
//             },
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Percentile',
//         },
//         ticks: {
//           // Only display labels for 25, 50, 75, and 100
//           callback: function (value) {
//             if (displayedPercentiles.includes(value)) {
//               return value; // Show only 25, 50, 75, and 100
//             }
//             return ''; // Hide all other labels
//           },
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Number of Students',
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div style={{ position: 'relative', height: '400px', width: '600px' }}>
//       <div>
//         <strong>You scored {yourPercentile}th percentile</strong>, which is lower than the average percentile {averagePercentile}% of all the engineers who took this assessment.
//       </div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default LineChart;



import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = () => {
  const { rank, percentile, correctAnswers, totalQuestions } = useSelector((state) => state.statistics);

  // Ensure percentile is within 0–100 range
  const yourPercentile = Math.min(Math.max(percentile, 0), 100); 
  const averagePercentile = 72;

  // Displayed percentiles (X-axis)
  const displayedPercentiles = [25, 50, 75, 100];

  // Full labels list for interpolation
  const fullLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const labels = Array.from(new Set([...fullLabels, yourPercentile, averagePercentile])).sort((a, b) => a - b);

  // Simulated number of students data (Y-axis)
  const numberOfStudentsData = [1, 2, 3, 4, 6, 10, 8, 7, 6, 4, 2]; 

  // Helper function to interpolate data
  const interpolate = (x, x0, y0, x1, y1) => {
    return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
  };

  // Interpolating the number of students for 'yourPercentile' and 'averagePercentile'
  const interpolatedData = labels.map((label, index) => {
    const baseIndex = fullLabels.indexOf(label);
    if (baseIndex !== -1) {
      return numberOfStudentsData[baseIndex]; // Exact values from numberOfStudentsData
    } else {
      // Interpolation logic if percentile isn't part of fullLabels
      const lowerIndex = fullLabels.findIndex(baseLabel => baseLabel < label && fullLabels[fullLabels.indexOf(baseLabel) + 1] > label);
      const upperIndex = lowerIndex + 1;

      // Ensure we have valid indices
      if (lowerIndex >= 0 && upperIndex < fullLabels.length) {
        const lowerPercentile = fullLabels[lowerIndex];
        const upperPercentile = fullLabels[upperIndex];
        const lowerValue = numberOfStudentsData[lowerIndex];
        const upperValue = numberOfStudentsData[upperIndex];

        // Return interpolated value
        return interpolate(label, lowerPercentile, lowerValue, upperPercentile, upperValue);
      }
      return 0; // Fallback for invalid ranges
    }
  });

  const data = {
    labels, // X-axis: Percentiles
    datasets: [
      {
        label: 'Number of Students',
        data: interpolatedData, // Y-axis: Number of students per percentile
        borderColor: 'rgba(99, 132, 255, 1)', // Line color
        backgroundColor: 'rgba(99, 132, 255, 0.2)', // Fill color
        fill: true,
        pointRadius: 6,
        pointBackgroundColor: (ctx) => {
          const index = ctx.dataIndex;
          if (labels[index] === yourPercentile) return 'rgba(255, 99, 132, 1)'; // Highlight 'your percentile'
          if (labels[index] === averagePercentile) return 'rgba(75, 192, 192, 1)'; // Highlight 'average percentile'
          return 'rgba(99, 132, 255, 1)'; // Default point color
        },
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Percentile: ${tooltipItem.label}, Number of Students: ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
      title: {
        display: false,
        text: 'Comparison Graph',
        font: {
          size: 18,
        },
      },
      annotation: {
        annotations: {
          yourPercentileLine: {
            type: 'line',
            scaleID: 'x',
            value: yourPercentile,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: 'Your Percentile',
              enabled: true,
              position: 'start',
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              color: 'white',
            },
          },
          averagePercentileLine: {
            type: 'line',
            scaleID: 'x',
            value: averagePercentile,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            label: {
              content: 'Average Percentile',
              enabled: true,
              position: 'start',
              backgroundColor: 'rgba(75, 192, 192, 0.8)',
              color: 'white',
            },
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
        ticks: {
          // Display only 25, 50, 75, and 100
          callback: function (value) {
            if (displayedPercentiles.includes(value)) {
              return value; // Show only the major percentiles
            }
            return ''; // Hide other labels
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
        beginAtZero: true,
      },
    },
  };

  // Determine whether the percentile is higher or lower than the average
  const comparisonText = yourPercentile < averagePercentile 
    ? `You scored ${yourPercentile}th percentile, which is lower than the average percentile of ${averagePercentile}% of all the engineers who took this assessment.`
    : `You scored ${yourPercentile}th percentile, which is higher than the average percentile of ${averagePercentile}% of all the engineers who took this assessment.`;

  return (
    <div style={{ position: 'relative', height: '400px', width: '600px' }}>
      <div >
        <span>{comparisonText}</span>
      </div>
      <Line data={data} options={options} className='mt-5' />
    </div>
  );
};

export default LineChart;
