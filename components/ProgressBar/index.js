import React from "react";

import { Progress } from "antd";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProgressBar(props) {
  const {
    strokeLinecap = "butt",
    strokeColor = "lightblue",
    percent ,
    showInfo = false ,
 } = props;

  return (
    <div>
      <Progress
        strokeLinecap={strokeLinecap}
        strokeColor={strokeColor}
        percent={percent}
        showInfo={showInfo}
      />
    </div>
  );
}
