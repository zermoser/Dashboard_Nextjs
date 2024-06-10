import React from "react";
import Grid from "@mui/material/Grid";
import { LayoutPage, StyledGridCard } from "./styled";
import ButtonApp from "../../components/ButtonApp/index";
import { Stack } from "@mui/material";
import PrepareingVmTableView from "./PrepareingVmTableView/index";
import RunningVmTableView from "./RunningVmTableView/index";
import CardHeaderView from "./CardHeaderView";

import SearchInput from "../../components/SearchInput";


const handleClick = async () => {};

const handleSearch = (value) => {
  console.log(value)

};

export default function ManageVmView() {
  return (
    <div>
          <LayoutPage>
            <CardHeaderView />
            <Grid container columns={12}>
              <div style={{ marginTop: "20px" }}>
              <SearchInput onChange={handleSearch} />
              </div>
            </Grid>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}

            >
              <div>
                <h2 className="title-vm">Prepareing VM</h2>
              </div>
              <div>
                <ButtonApp title="Add" />
              </div>
            </Stack>
            <PrepareingVmTableView />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <div>
                <h2 className="title-vm">Running VM</h2>
              </div>
              <div>
                <ButtonApp title="view performance" />
              </div>
            </Stack>
            <RunningVmTableView />
          </LayoutPage>
        
     
    </div>
  );
}
