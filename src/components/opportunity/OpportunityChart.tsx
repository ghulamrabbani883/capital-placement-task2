import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { chartData } from "../../data/data";

Chart.register(CategoryScale);

const OpportunityChart = () => {
  
  return (
    <div className="bg-white w-full h-fit p-5 rounded-lg">
      <Line
        className=""
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Recommended",
            },
            legend: {
              display: true,
              position:'top'
            },
          },
        }}
      />
    </div>
  );
};

export default OpportunityChart;
