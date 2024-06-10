import React from "react";
import { Table } from "antd";

export default function Tables({ columns, data, rowSelection }) {
  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={true}
        rowSelection={rowSelection}
      />
    </div>
  );
}
