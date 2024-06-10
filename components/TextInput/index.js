import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

export default function TextInput({ labelLogin }) {
  return (
    <div>
      <FormControl sx={{ width: "100%", borderRadius: "8px" }} variant="filled">
        <TextField
          id="outlined-basic"
          label={
            <Typography style={{ fontFamily: "Roboto_normal" }}>
              {labelLogin}
            </Typography>
          }
          variant="outlined"
        />
      </FormControl>
    </div>
  );
}
