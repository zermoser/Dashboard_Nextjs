import React from "react";
import { TitlePadding, LayoutScreen, LayoutCardTab } from "./styled";
import "antd/dist/antd.css";
import VmDetailHeader from "./VmDetailHeader/index";
import VmDetailCharts from "./VmDetailCharts/index";
import VmDetailParameter from "./VmDetailParameter/index";

import LoaderPage from "../../components/LoaderPage/index";

import { Tabs } from "antd";
const { TabPane } = Tabs;

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function VmDetailView() {
  const onChange = (key) => {};

  const VMPage = () => (
    <LayoutCardTab>
      <Tabs onChange={onChange} type="card">
        <TabPane tab="Infra Usage" key="1">
          <VmDetailCharts />
        </TabPane>
        <TabPane tab="Customer Parameter" key="2">
          <VmDetailParameter />
        </TabPane>
      </Tabs>
    </LayoutCardTab>
  );

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <LayoutScreen>
        <VmDetailHeader />
        <TitlePadding />
        <VMPage />
      </LayoutScreen>
    </div>
  );
}
