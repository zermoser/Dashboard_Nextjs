import { Box } from "@mui/material";
import React from "react";
import { Card, ItemList } from "./styled";

export default function CardHeader({ Status, data, widthProps }) {
  const RenderDetailColumn = ({ title, value, position }) => {
    return (
      <Box className={`${position}`}>
        <div className="card-right-title">{title}</div>
        <div className="card-list">{value}</div>
      </Box>
    );
  };

  return (
    <Card width={widthProps ? widthProps : "310px"}>
      {data?.map((item, index) => (
        <>
          {index >= 1 && <div className="line"></div>}
          <RenderDetailColumn
            title={item.title}
            value={item.value}
            position={item.position}
            widthProps={item.widthProps}
          />
        </>
      ))}
      {Status && <div className="line"></div>}
      <div>
        {Status?.map((item, index) => (
          <ItemList color={item.color} key={index}>
            <div>{item?.title}</div>
            <div>{item?.value}</div>
          </ItemList>
        ))}
      </div>
    </Card>
  );
}
