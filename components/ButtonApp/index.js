import React from "react";
import Button from "@mui/material/Button";
import { theme } from "../../theme";
import { capitalize } from "@mui/material";

export default function ButtonApp(props) {
  const {
    title,
    color,
    backgroundColor,
    width,
    height,
    borderRadius,
    border,
    marginLeft,
    disable,
    handleClick,
    size,
  } = props;

  return (
    (<Button variant="contained"></Button>),
    (
      <Button
        sx={{
          backgroundColor: backgroundColor || theme.COLORS.BLUE_MAIN,
          color: color || theme.COLORS.WHITE_1,
          width: width,
          height: height,
          borderRadius: borderRadius || "10px",
          border: border,
          marginLeft: marginLeft || "15px",
          disable: disable,
          textTransform: "capitalize",
          fontFamily: theme.FONT_FAMILY.MEDIUM,
          ":hover": {
            bgcolor: theme.COLORS.BLUE_MAIN,
          },
        }}
        size={size ? size : "small"}
        variant="contained"
        onClick={disable ? null : handleClick}
      >
        {title}
      </Button>
    )
  );
}
