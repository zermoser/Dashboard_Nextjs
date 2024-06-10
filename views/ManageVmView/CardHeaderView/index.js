import React from "react";
import CardHeader from "../../../components/CardHeader/index";
import { Stack } from "@mui/material";
import { theme } from "../../../theme";
import { PageRespon } from "./styled";

export default function CardHeaderView() {
  return (
    <div>
      <Stack direction={{ xs: "column", sm: "row"}} spacing={3}>
        <PageRespon>
          <CardHeader 
            Status={[
              {
                title: "Online",
                value: "14",
                color: theme.COLORS.ONLINE_STATUS,
              },
              {
                title: "Offline",
                value: "6",
                color: theme.COLORS.OFFLINE_STATUS,
              },
            ]}
            data={[
              {
                title: "Infa",
                value: "VMs : 20",
                position: "card-lift",
              },
            ]}
          />
        </PageRespon>
        <PageRespon>
          <CardHeader
            widthProps={"190px"}
            data={[
              {
                title: "Window os",
                value: "6",
              },
            ]}
          />
        </PageRespon>
        <PageRespon>
          <CardHeader
            widthProps={"200px"}
            data={[
              {
                title: "Linux os",
                value: "8",
              },
            ]}
          />
        </PageRespon>
        <PageRespon>
          <CardHeader
            data={[
              {
                title: "vCPU",
                value: "5",
                position: "card-lift",
              },
              {
                title: "vRAM",
                value: "20 GB",
                position: "card-center",
              },
              {
                title: "vDisk",
                value: "1 Tb",
                position: "card-right",
              },
            ]}
          />
        </PageRespon>
      </Stack>
    </div>
  );
}
