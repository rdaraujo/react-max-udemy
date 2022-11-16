import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const monthTotalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={monthTotalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
