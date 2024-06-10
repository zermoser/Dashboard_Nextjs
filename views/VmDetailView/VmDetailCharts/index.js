import React from "react";
import {
  TitlePadding,
  LayoutPageInfraUsage,
  StyleText,
  CardChart,
  GridCard,
  StatusHistoryBox,
  ChartSize,
  TableSearchBox,
  SearchOutline,
  SearchCard,
  TableEdit,
} from "./styled";

import "antd/dist/antd.css";

import ButtonApp from "../../../components/ButtonApp/index";
import SearchInput from "../../../components/SearchInput/index";
import Tables from "../../../components/Tables/index";

import ChartData from "../../../components/Chart/index";
import ProgressBarDetail from "../../../components/ProgressBarDetail/index";

import CircleIcon from "@mui/icons-material/Circle";

import { Tabs } from "antd";
const { TabPane } = Tabs;

import dynamic from "next/dynamic";
import { theme } from "../../../theme";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function VmDetailCharts() {
  const Status_History_columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "0",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "1",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "2",
      render: (_, record) => (
        <span
          style={{
            color:
              record?.status === "on"
                ? theme.COLORS.ONLINE_STATUS
                : theme.COLORS.OFFLINE_STATUS,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleIcon style={{ fontSize: "14px", marginRight: "10px" }} />
          {record?.status}
        </span>
      ),
    },
    {
      title: "CPU Usage %",
      dataIndex: "CPU",
      key: "3",
    },
    {
      title: "Memory Usage %",
      dataIndex: "Memory",
      key: "4",
    },
    {
      title: "Disk Usage %",
      dataIndex: "Disk",
      key: "5",
    },
  ];

  const Status_History_data = [
    {
      id: "1",
      Date: "23/02/2020 13:03:10",
      CPU: "56%",
      Memory: "56%",
      Disk: "56%",
      status: "on",
    },
    {
      id: "2",
      Date: "23/02/2020 13:03:10",
      CPU: "56%",
      Memory: "56%",
      Disk: "56%",
      status: "on",
    },
    {
      id: "3",
      Date: "23/02/2020 13:03:10",
      CPU: "56%",
      Memory: "56%",
      Disk: "56%",
      status: "on",
    },
    {
      id: "4",
      Date: "23/02/2020 13:03:10",
      CPU: "56%",
      Memory: "56%",
      Disk: "56%",
      status: "on",
    },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <LayoutPageInfraUsage>
        <div className="layoutCardPaper">
          <div className="layoutCardChart">
            <GridCard>
              <CardChart>
                <div className="ProgressCard">
                  <ProgressBarDetail
                    title_1="Memory Usage"
                    percent_1="61"
                    title_2="CPU Usage"
                    percent_2="44"
                    title_3="Disk Usage"
                    percent_3="53"
                  />
                </div>
              </CardChart>

              <CardChart>
                <ChartSize>
                  <ChartData
                    title="Memory Usage"
                    cartegories={["text", "text", "text", "text", "text"]}
                    series={[
                      {
                        name: "ChartMemory",
                        data: [70, 50, 70, 93, 30],
                      },
                    ]}
                    colors={[theme.COLORS.CHART_DEFAULT_1]}
                    width="100%"
                    height="125%"
                  />
                </ChartSize>
              </CardChart>

              <CardChart>
                <ChartSize>
                  <ChartData
                    title="CPU Usage"
                    cartegories={["text", "text", "text", "text", "text"]}
                    series={[
                      {
                        name: "ChartCPU",
                        data: [30, 80, 30, 43, 93],
                      },
                    ]}
                    colors={[theme.COLORS.CHART_DEFAULT_2]}
                    width="100%"
                    height="125%"
                  />
                </ChartSize>
              </CardChart>

              <CardChart>
                <ChartSize>
                  <ChartData
                    title="Disk Usage"
                    cartegories={["text", "text", "text", "text", "text"]}
                    series={[
                      {
                        name: "ChartDisk",
                        data: [30, 50, 0, 93, 30],
                      },
                    ]}
                    colors={[theme.COLORS.CHART_DEFAULT_3]}
                    width="100%"
                    height="125%"
                  />
                </ChartSize>
              </CardChart>
            </GridCard>

            <TitlePadding />
          </div>

          <SearchCard>
            <StatusHistoryBox>
              <StyleText>Status History</StyleText>
            </StatusHistoryBox>

            <TableSearchBox>
              <SearchOutline>
                <SearchInput />
              </SearchOutline>
              <ButtonApp height="40px" title="Export" />
            </TableSearchBox>
          </SearchCard>

          <div style={{ paddingBottom: "15px" }} />

          <TableEdit>
            <Tables
              columns={Status_History_columns}
              data={Status_History_data}
            />
          </TableEdit>
        </div>
      </LayoutPageInfraUsage>
    </div>
  );
}
