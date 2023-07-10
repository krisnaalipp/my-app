import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const data = {
    labels: ["Mo", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Data",
        data: [10, 15, 7, 12, 9, 14],
        backgroundColor: "rgba(173, 120, 220, 0.8)", // Light purple color
        borderRadius: 5, // Border radius of each bar
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false, // Hide y-axis labels
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
