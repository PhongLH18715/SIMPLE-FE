import Chart from 'chart.js/auto';

Chart.register(
  {
    id: 'linear',
    type: 'linear',
    ticks: {
      maxTicksLimit: 8,
      precision: 0,
      maxRotation: 0,
      padding: 10,
      font: {
        size: 11,
      },
    },
  },
  {
    id: 'logarithmic',
    type: 'logarithmic',
    ticks: {
      callback: (value, index, values) => {
        return Number(value.toString());
      },
      min: 0,
      max: 100,
    },
  }
);

export default Chart;