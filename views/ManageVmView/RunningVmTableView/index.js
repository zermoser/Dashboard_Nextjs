import React, { useState } from "react";
import "antd/dist/antd.css";
import CircleIcon from "@mui/icons-material/Circle";
import { Card, TableCard } from "./styled";
import Tables from "../../../components/Tables";
import Link from "next/link";
import { theme } from "../../../theme";
import Grid from "@mui/material/Grid";
import ButtonApp from "../../../components/ButtonApp";
import SwitchIcon from "../../../components/SwitchIcon";
import ReloadOutlinedIcon from "../../../components/ReloadOutlinedIcon";
import { Stack } from "@mui/material";

export default function RunningVmTableView() {
  const renderStatusColor = (status) => {
    switch (status) {
      case "Healthy":
        return theme.COLORS.ONLINE_STATUS;
      case "Off":
        return theme.COLORS.OFFLINE_STATUS;
    }
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key:"0",
    },
    {
      title: "No.",
      dataIndex: "no",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Infa Name",
      dataIndex: "name",
    },
    {
      title: "Machine health",
      dataIndex: "machinehealth",
      render: (_, record) => (
        <span
          style={{
            color: renderStatusColor(record?.machinehealth),
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleIcon style={{ fontSize: "14px", marginRight: "4px" }} />
          {record?.machinehealth}
        </span>
      ),
    },
    {
      title: "Create Date",
      dataIndex: "createdate",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Expired Date",
      dataIndex: "expireddate",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Mananage Could",
      dataIndex: "mananagecould",

      render: (_, record) => {
        return (
          <div>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <SwitchIcon />
              <ReloadOutlinedIcon />
              <ButtonApp
                title="Command"
                width="96px"
                height="30px"
                borderRadius="8px"
              />
              <span
                style={{
                  color: theme.COLORS.BLUE_MAIN,
                  marginLeft: "15px",
                  borderBottom: "1px solid",
                  cursor: "pointer",
                }}
              >
                <Link href={{ pathname: "/vm-detail" }}>View Detail</Link>
              </span>
            </Stack>
          </div>
        );
      },
    },
  ];
  const data = [
    {
      id: "1",
      no: "27",
      name: "Testtt",
      machinehealth: "Off",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "2",
      no: "42",
      name: "Testtt",
      machinehealth: "Healthy",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "3",
      no: "36",
      name: "Testtt",
      machinehealth: "Healthy",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "4",
      no: "36",
      name: "Testtt",
      machinehealth: "Off",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "5",
      no: "27",
      name: "Testtt",
      machinehealth: "Off",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "6",
      no: "74",
      name: "Testtt",
      machinehealth: "Healthy",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
    {
      id: "7",
      no: "39",
      name: "Testtt",
      machinehealth: "Healthy",
      createdate: "20/12/2021",
      expireddate: "20/12/2021",
      dataIndex: "mananagecould",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  return (
    <div>
      <Grid>
        <Card>
          <TableCard>
            <Tables
              rowSelection={{ ...rowSelection }}
              columns={columns}
              data={data}
            />
          </TableCard>
        </Card>
      </Grid>
    </div>
  );
}
