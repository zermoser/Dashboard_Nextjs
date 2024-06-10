import React, { useEffect } from "react";
import { NarBarPageHeader } from "./styled";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useRouter } from "next/router";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function NavbarMainPage() {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClick = (e, href, id) => {
    // router.push(href);
    var element = e?.target;
    var currentDropdown = document.getElementsByClassName("dropdown-content");
    var current = document.getElementsByClassName("active");

    if (id === "my-service") {
      currentDropdown[0].classList.toggle("show");
      let classNameDropdown =
        document.getElementsByClassName("my-service-content");
      current[0].className = current[0].className.replace(" active", "");
      classNameDropdown[0].className += " active";
    } else if (id === "payper-use") {
      let classNameDropdown =
        document.getElementsByClassName("payper-use-content");
      current[0].className = current[0].className.replace(" active", "");
      classNameDropdown[0].className += " active";
      currentDropdown[1].classList.toggle("show");
    }
    if (element.nodeName === "DIV") {
      current[0].className = current[0].className.replace(" active", "");
      element.className += " active";
    }
  };

  const handleClickOutside = (e) => {
    var navbarArea = document.getElementsByClassName("nav-area");
    var currentNav = document.getElementsByClassName("active-nav");
    if (!e.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
    if (navbarArea[0] !== undefined) {
      if (
        navbarArea[0].className === "nav-area active-nav" ||
        navbarArea[0].className === "nav-area active-nav active-nav-width"
      ) {
        if (
          e.target.closest(".nav-area") === null &&
          e.target.closest(".nav-toggle-btn") === null
        ) {
          if (navbarArea[0].classList.contains("active-nav")) {
            navbarArea[0].classList.remove(navbarArea[0].classList[1]);
            if (currentNav[0] === undefined) {
              setTimeout(() => {
                navbarArea[0].classList.remove("active-nav-width");
              }, 100);
            }
          }
        }
      }
    }
  };
  const handleClickLink = (href) => {
    router.push(href);
  };
  const handleClickNav = (e) => {
    var navbarArea = document.getElementsByClassName("nav-area");
    navbarArea[0].classList.toggle("active-nav");
    navbarArea[0].classList.toggle("active-nav-width");
  };
  return (
    <NarBarPageHeader>
      <div className="nav-toggle-btn" onClick={(e) => handleClickNav(e)}>
        <MenuOutlinedIcon />
      </div>
      <div className="nav-area">
        <div className="nav-header">
          <div className="icon-bar" onClick={() => handleClickLink("/")}>
            Logo
          </div>
          <div
            className="dashboard-page active"
            onClick={(e) => handleClick(e, "#dashboard")}
          >
            Dashboard
          </div>
          <div className="my-service">
            <div className="dropdown">
              <div
                className="dropbtn"
                onClick={(e) => handleClick(e, "#my-service", "my-service")}
              >
                <div className="my-service-container">
                  <div className="my-service-content">MY Service</div>
                  <ExpandMoreOutlinedIcon fontSize="small" />
                </div>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div className="payper-use">
            <div className="dropdown">
              <div
                className="dropbtn"
                onClick={(e) => handleClick(e, "#payper-use", "payper-use")}
              >
                <div className="payper-use-container">
                  <div className="payper-use-content">Payper use</div>
                  <ExpandMoreOutlinedIcon fontSize="small" />
                </div>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="products-services"
            onClick={(e) => handleClick(e, "#products-services")}
          >
            ผลิตภัณฑ์และบริการ
          </div>
          <div
            className="contact-us"
            onClick={(e) => handleClick(e, "#contact-us")}
          >
            ติดต่อเรา
          </div>
        </div>
        <div className="nav-footer">
          <div className="language">
            {" "}
            <Image
              src="/images/iconLanguage.png"
              alt="language Logo"
              layout="fixed"
              width={20}
              height={20}
            />
            &nbsp; TH
          </div>
          <div className="icon-cart">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </div>
          <div className="icon-user">
            <PersonOutlinedIcon />
          </div>
          <div className="user">User 111</div>
        </div>
      </div>
    </NarBarPageHeader>
  );
}
