import React from "react";
import {
  TitlePadding,
  ItemListMini,
  ItemList,
  MiniCard,
  Card,
  LayoutPageInfraUsage,
  StyleText1,
  StyleText2,
  StyleText3,
  LayoutCard,
  Line,
  AddMediaCard,
  AddMediaHeader,
} from "./styled";

import { Tabs } from "antd";
const { TabPane } = Tabs;

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function VmDetailHeader() {
  const CardVM_Detail = ({ data }) => {
    return (
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <ItemList>
              <div>{item?.title}</div>
              <StyleText1>
                <div>{item?.detail}</div>
              </StyleText1>
            </ItemList>
          </div>
        ))}
      </div>
    );
  };

  const CardVM_DetailMini = ({ dataMini }) => {
    return (
      <div>
        {dataMini?.map((item, index) => (
          <div key={index}>
            <ItemListMini>
              <StyleText2>
                <div>{item?.title}</div>
              </StyleText2>
              <TitlePadding />
              <StyleText3>
                <div>{item?.detail}</div>
              </StyleText3>
            </ItemListMini>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <LayoutPageInfraUsage>
        <LayoutCard>
          <Card>
          <AddMediaHeader>
            <CardVM_Detail
              data={[
                { title: "Infra Name :", detail: "Cluster Number4" },
                { title: "Network IP :", detail: "291.44.456.78" },
                { title: "IP Address :", detail: "80.127.345.789" },
                { title: "External :", detail: "80.127.345.789" },
              ]}
            />
            <Line />
            
            
            <CardVM_Detail
              data={[
                { title: "OS", detail: "Mac os Catalina" },
                { title: "COU", detail: "4 Gigabyte" },
                { title: "Memory", detail: "4 Gigabyte" },
                { title: "Disk", detail: "256 Gigabyte" },
              ]}
            />
            </AddMediaHeader>
          </Card>

          <div style={{ marginLeft: "1em" }} />

          <AddMediaCard>
            <MiniCard>
              <CardVM_DetailMini
                dataMini={[
                  { title: "CPU", detail: "4 Cores" },
                  { title: "Usage : ", detail: "50 %" },
                ]}
              />
            </MiniCard>
            <div style={{ marginLeft: "1em" }} />
            <MiniCard>
              <CardVM_DetailMini
                dataMini={[
                  { title: "Memory", detail: "4 Cores" },
                  { title: "Usage : ", detail: "50 %" },
                ]}
              />
            </MiniCard>
            <div style={{ marginLeft: "1em" }} />
            <MiniCard>
              <CardVM_DetailMini
                dataMini={[
                  { title: "Disk", detail: "4 Bytes" },
                  { title: "Usage : ", detail: "50 %" },
                ]}
              />
            </MiniCard>
          </AddMediaCard>
        </LayoutCard>
      </LayoutPageInfraUsage>
    </div>
  );
}

