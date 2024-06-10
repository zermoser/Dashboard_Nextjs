import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { theme } from "../../theme";


export default function ChartData(props) {

  const {
    title,
    type = "area",
    categories = [],
    series = [],
    width,
    height,
    colors = [theme.COLORS.CHART_DEFAULT_2]
  } = props;

  const VMChart = {
    options: {
      colors: [],
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        id: "chart",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [],
  };

  return (
    <div>
      <h3> {title} </h3>
      <Chart
        options={{
          ...VMChart.options,
          xaxis: { categories: categories },
          colors: colors,
        }}
        series={series}
        width={width}
        height={height}
        type={type}
      />
    </div>
  );
}
