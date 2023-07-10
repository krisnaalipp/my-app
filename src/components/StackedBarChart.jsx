import {
  Chart as ChartJS,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement
);

const StackedBarChart = () => {
  const data = {
    labels: ["Progress"],
    datasets: [
      {
        data: [70],
        backgroundColor: ["#0084ff"],
        barPercentage: 0.8,
      },
      {
        data: [15],
        backgroundColor: ["#6b0bff"],
        barPercentage: 0.8,
      },
      {
        data: [15],
        backgroundColor: ["#ff4033"],
        barPercentage: 0.8,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    aspectRatio: 30,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return <Bar className="rounded-full" data={data} options={options} />;
};

export default StackedBarChart;
