import React, { useState, useEffect } from "react";
import { DialogStyle } from "./styled";
import Dialog from "@mui/material/Dialog";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import TextInput from "../../components/TextInput";
import ButtonApp from "../../components/ButtonApp";
import { theme } from "../../theme";

export default function DialogLogin({ stateDialog, setStateDialog }) {
  const router = useRouter();
  const handleClose = () => {
    setStateDialog(false)
  };
  const handleLogin = (href) => {
    router.push(href);
  };
  return (
    <div>
      <Dialog
        open={stateDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            paddingLeft: "6vw",
            paddingRight: "5.7vw",
            borderRadius: "40px",
            width: "30vw",
            height: "72vh",
            "::-webkit-scrollbar": {
              height: "0",
            },
            ["@media (max-width:1150px)"]: {
              width: "40vw",
              height: "72vh",
            },
            ["@media (max-width:700px)"]: {
              width: "50vw",
              height: "72vh",
              borderRadius: "35px",

            },
            ["@media (max-width:500px)"]: {
              width: "70vw",
              height: "72vh",
              borderRadius: "30px",

            },
            ["@media (max-width:420px)"]: {
              width: "90vw",
              height: "72vh",
              borderRadius: "30px",

            },
          },
        }}
      >
        <DialogStyle>
          <div className="container-dialog">
            <div className="title-dialog">เข้าสู่ระบบ</div>
            <div className="sub-title">ในระบบ ทดสอบ</div>
            <div className="container-from">
              <div className="label-username">ชื่อผู้ใช้งาน</div>
              <div className="input-username">
                <TextInput labelLogin={"ชื่อผู้ใช้งาน"} />
              </div>
              <div className="label-password">รหัสผ่าน</div>
              <div className="input-password">
                <TextInput labelLogin={"รหัสผ่าน"} />
              </div>
              <div className="grid-remember">
                <div className="remember-me">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <Typography
                        style={{ fontFamily: theme.FONT_FAMILY.REGULAR }}
                      >
                        จำฉันไว้ในระบบ
                      </Typography>
                    }
                  />
                </div>
                <div className="forget-password">ลืมรหัสผ่าน</div>
              </div>
              <div className="btn-position">
                <ButtonApp
                  title="เข้าสู่ระบบ"
                  width="100%"
                  borderRadius="8px"
                  height="80%"
                  size="large"
                  marginLeft="0px"
                  handleClick={() => handleLogin("/manage-vm")}
                />
              </div>
            </div>
            <div className="container-register">
              <div className="label-register">ยังไม่มีบัญชี ทดสอบ ?</div>
              <div className="button-register">ลงทะเบียน</div>
            </div>
          </div>
        </DialogStyle>
      </Dialog>
    </div>
  );
}
