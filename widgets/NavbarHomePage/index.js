import React, { useState, useEffect, useRef } from "react";
import { NavBarHeader } from "./styled";
import Image from "next/image";
import DialogLogin from "../dialogLogin";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
export default function NavbarHomePage() {
  const [stateDialog, setStateDialog] = useState(false);
  const dialogRef = useRef(false);
  const openDialog = () => {
    setStateDialog(!stateDialog);
  };
  const handleClick = (e) => {
    var indexElement = e?.target;
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    indexElement.className += " active";
  };

  const handleClickOutside = (e) => {
    var dialogCurrent = dialogRef.current;
    var navbar = document.getElementsByClassName("space-area");
    var currentNav = document.getElementsByClassName("active-nav");
    if (navbar[0] !== undefined) {
      if (
        navbar[0].className === "space-area active-nav" ||
        navbar[0].className === "space-area active-nav active-nav-width"
      ) {
        if (
          e.target.closest(".space-area") === null &&
          dialogCurrent !== true &&
          e.target.closest(".nav-toggle-btn") === null
        ) {
          if (navbar[0].classList.contains("active-nav")) {
            navbar[0].classList.remove(navbar[0].classList[1]);
            if (currentNav[0] === undefined) {
              setTimeout(() => {
                navbar[0].classList.remove("active-nav-width");
              }, 100);
            }
          }
        }
      }
    }
  };

  const handleClickNav = (e) => {
    var navbar = document.getElementsByClassName("space-area");
    navbar[0].classList.toggle("active-nav");
    navbar[0].classList.toggle("active-nav-width");
  };
  useEffect(() => {
    dialogRef.current = stateDialog;
    window.addEventListener("click", handleClickOutside, true);
  }, [stateDialog]);

  return (
    <NavBarHeader>
      <div className="nav-toggle-btn" onClick={(e) => handleClickNav(e)}>
        <MenuOutlinedIcon />
      </div>
      <div className="space-area">
        <div className="nav-header">
          <div className="icon-bar">
            Logo
          </div>
          <li className="home-page active" onClick={(e) => handleClick(e)}>
            หน้าหลัก {stateDialog}
          </li>
          <li className={"about-me"} onClick={(e) => handleClick(e)}>
            เกี่ยวกับเรา
          </li>
          <li className="why-me" onClick={(e) => handleClick(e)}>
            ทำไมต้องเรา
          </li>
          <li className="products-services" onClick={(e) => handleClick(e)}>
            ผลิตภัณฑ์และบริการ
          </li>
          <li className="contact-us" onClick={(e) => handleClick(e)}>
            ติดต่อเรา
          </li>
        </div>
        <div className="nav-footer">
          <div className="icon-language">
            <Image
              src="/images/iconLanguage.png"
              alt="language Logo"
              layout="fixed"
              width={20}
              height={20}
            />
            &nbsp; TH
          </div>
          <div className="register">Register</div>
          <div className="vertical-line" />
          <div className="login" onClick={openDialog}>
            Log in
          </div>
        </div>
      </div>
      <DialogLogin stateDialog={stateDialog} setStateDialog={setStateDialog} />
    </NavBarHeader>
  );
}
