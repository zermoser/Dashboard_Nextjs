import React from "react";
import { TableCard, LayoutPageParameter } from "./styled";
import "antd/dist/antd.css";
import CircleIcon from "@mui/icons-material/Circle";

import Tables from "../../../components/Tables/index";

import { Tabs } from "antd";
const { TabPane } = Tabs;

import dynamic from "next/dynamic";
import { theme } from "../../../theme";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function VmDetailParameter() {
  let columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: '0',
    },
    {
      title: "NO.",
      dataIndex: "NO",
      key: "1",
    },
    {
      title: "Sensor",
      dataIndex: "Sensor",
      key: "2",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "3",
    },
    {
      title: "HealthScore",
      dataIndex: "HealthScore",
      key: "4",
      render: (_, record) => (
        <span
          style={{
            color: record?.HealthScore === "Normal" ? theme.COLORS.ONLINE_STATUS : theme.COLORS.OFFLINE_STATUS ,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleIcon style={{ fontSize: "14px", marginRight: "10px" }} />
          {record?.HealthScore}
        </span>
      ),
    },
    {
      title: "Score",
      dataIndex: "Score",
      key: "Score",
    },
  ];

  const data = [
    {
      id: "1",
      NO: "1",
      Sensor: "JUBILEE_3CX-WSUS",
      Status: "Up",
      HealthScore: "Normal",
      Score: "30%",
    },
    {
      id: "2",
      NO: "2",
      Sensor:
        "Virtual StorageC:-ClusterStorage-IDC2_B_ATC_ACI1_PRD1_SSD05-jubilee_3cx-wsus-Virtual Hard Disks-MS_WS2012R2_STD_50GB_089616F4-2D7B-4F07-A1A7-ADBF5A884 F73.avhdx",
      Status: "Up",
      HealthScore: "Normal",
      Score: "546 Bytes/sec",
    },
    {
      id: "3",
      NO: "3",
      Sensor:
        "Virtual StorageC:-ClusterStorage-IDC2_B_ATC_ACI1_PRD1_SSD05-jubilee_3cx-wsus-Virtual Hard Disks-WSUS_disk_1_D9D53E58-2484-47D8-96E8-388085A40FCE.avhdx",
      Status: "Up",
      HealthScore: "Normal",
      Score: "0 Bytes/sec",
    },
    {
      id: "4",
      NO: "4",
      Sensor:
        "JUBILEE_3CX-WSUS_WSUS_4781e74a-a45c-415b-af3e-82160120b072--4de4559b-dd58-4a62-b1c9-4569dd477459",
      Status: "Up",
      HealthScore: "Normal",
      Score: "< 0.01 MB",
    },
  ];

  return (
    <div>
      <LayoutPageParameter>
        <TableCard>
        <Tables columns={columns} data={data} />
        </TableCard>
      </LayoutPageParameter>
    </div>
  );
}
