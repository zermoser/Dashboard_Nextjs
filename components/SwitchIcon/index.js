import React from 'react'
import { theme } from "../../theme";
import { Switch } from "antd";

export default function SwitchIcon() {
  return (
    <Switch
    style={{ backgroundColor: theme.COLORS.ONLINE_STATUS }}
    checkedChildren="ON"
    unCheckedChildren="OFF"
  />
  )
}
