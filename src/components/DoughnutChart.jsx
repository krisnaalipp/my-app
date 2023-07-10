import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "60%",
    elements: {
      arc: {
        borderRadius: 2,
      },
    },
    aspectRatio: 1,
  };

  return (
    <Doughnut
      className="rounded-full aspect-auto"
      data={data}
      options={options}
    />
  );
};

export default DoughnutChart;
