import React from "react";
import { Card, TableCard } from "./styled";
import Tables from "../../../components/Tables";
import CircleIcon from "@mui/icons-material/Circle";
import { theme } from "../../../theme";
import Grid from "@mui/material/Grid";

export default function PrepareingVmTableView() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key:"0",
    },
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "OS",
      dataIndex: "os",
      key: "os",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",

      render: (_, record) => (
        <span
          style={{
            color:
              record?.status === "Pending"
                ? theme.COLORS.PENDING_STATUS
                : "red",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleIcon style={{ fontSize: "14px", marginRight: "4px" }} />
          {record?.status}
        </span>
      ),
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
  ];

  const data = [
    {
      id: "1",
      no: "1",
      name: "Testttt",
      brand: "nutanix",
      os: "CentOS",
      status: "Pending",
      date: "20/12/2022",
    },
    {
      id: "2",
      no: "2",
      name: "Testttt",
      brand: "Flexpod",
      os: "CentOS",
      status: "Pending",
      date: "20/12/2022",
    },
    {
      id: "3",
      no: "3",
      name: "Testttt",
      brand: "Atcetera",
      os: "CentOS",
      status: "Pending",
      date: "20/12/2022",
    },
  ];

  return (
    <div>
      <Grid>
        <Card>
          <TableCard>
            <Tables columns={columns} data={data} rowSelection={false} />
          </TableCard>
        </Card>
      </Grid>
    </div>
  );
}
