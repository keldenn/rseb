import React from 'react';
import ApexCharts from 'apexcharts';

const TopChart = ({ title, users, percentage, data, categories, buttonLabel }) => {
  React.useEffect(() => {
    const chartId = `area-chart-${title.replace(/\s+/g, '-')}`;
    const chartElement = document.getElementById(chartId);
    const options = {
      chart: {
        height: "100%",
        type: "area",
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
      },
      tooltip: { enabled: true },
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.75, opacityTo: 0 },
      },
      dataLabels: { enabled: false },
      stroke: { width: 2 },
      grid: { show: false },
      series: [{ name: title, data, color: "#FFFFFF" }],
      xaxis: {
        categories,
        labels: { show: false },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: { show: false },
    };

    let chart;
    if (chartElement && typeof ApexCharts !== 'undefined') {
      chart = new ApexCharts(chartElement, options);
      chart.render();
    }

    return () => {
      if (chart) chart.destroy();
    };
  }, [title, data, categories]);

  return (
    <div className="max-w-sm w-full\ dark:bg-gray-800 ">
    
      <div id={`area-chart-${title.replace(/\s+/g, '-')}`}></div>
     
    </div>
  );
};

export default TopChart;
