import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../theme";
import { SearchBox } from "./styled";

export default function SearchInput(props) {
  const { onChange } = props;

  return (
    <SearchBox>
      <input
        onChange={(e)=> onChange(e.target.value)}
        className="SearchInput"
        placeholder="ค้นหา .."
      ></input>
      <SearchIcon
        sx={{
          color: theme.COLORS.GREY_3,
          position: "absolute",
          paddingRight: "15px",
          fontSize: 45,
        }}
      />
    </SearchBox>
  );
}
