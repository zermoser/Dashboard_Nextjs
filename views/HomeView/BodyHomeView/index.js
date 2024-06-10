import React, { useState, useEffect, useRef } from "react";
import { ContentHeader } from "./styled";
import Image from "next/image";
import DialogLogin from "../../../widgets/dialogLogin";
import ButtonApp from "../../../components/ButtonApp";

export default function BodyHomeView() {
  const [stateDialog, setStateDialog] = useState(false);
  const dialogRef = useRef(false);
  const openDialog = () => {
    setStateDialog(!stateDialog);
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

  useEffect(() => {
    dialogRef.current = stateDialog;
    window.addEventListener("click", handleClickOutside, true);
  }, [stateDialog]);
  return (
    <div>
      <ContentHeader>
        <div className="container">
          <div className="container-content">
            <div className="content">
              <div className="header-content">Hello</div>
              <p className="desc-content">
                My name is Kittipoj Naewthavorn. This is my test Page.
              </p>
              <p>
              <ButtonApp
                borderRadius="8px"
                height="48px"
                width="172px"
                title="Log in"
                size="large"
                marginLeft="0px"
                handleClick={() => openDialog("/manage-vm")}
              />
              </p>
            </div>
          </div>
          <div className="container-image">
            <div className="content-image">
              <Image
                src="/images/iconServer.png"
                alt="server Logo"
                width="450px"
                height="450px"
              />
            </div>
          </div>
        </div>
      </ContentHeader>
      <DialogLogin stateDialog={stateDialog} setStateDialog={setStateDialog} />
    </div>
  );
}
