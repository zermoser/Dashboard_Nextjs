import styled from "styled-components";
import { theme } from "../../theme";

export const NarBarPageHeader = styled.div`
  display: flex;
  color: ${theme.COLORS.WHITE_1};
  // height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  .nav-area {
    background-color: ${theme.COLORS.BLUE_MAIN};
    height: 7vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
  }
  .active {
    border-bottom: 2px solid;
    font-size: 14px;
  }
  .nav-header {
    margin-left: 33px;
    width: 100vw;
    display: flex;
    align-items: center;
  }
  .icon-bar {
    margin-right: 67px;
    cursor: pointer;
  }

  //----------------------------------- show dropdown -----------------------------------------------

  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropbtn {
    border: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: ${theme.COLORS.BLACK_1};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: #ddd;
  }

  .show {
    display: block;
  }
  //----------------------------------- close dropdown -----------------------------------------------
  .dashboard-page {
    white-space: nowrap;
    cursor: pointer;
    margin-right: 40px;
    line-height: 6vh;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
  }
  .my-service {
    white-space: nowrap;
    cursor: pointer;
    margin-right: 40px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  }
  .my-service-container {
    display: flex;
    align-items: center;
  }
  .my-service-content {
    // border-bottom: 2px solid;
    line-height: 6vh;
    font-size: 16px;
  }
  .payper-use {
    white-space: nowrap;
    cursor: pointer;
    margin-right: 40px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  }
  .payper-use-container {
    display: flex;
    align-items: center;
  }
  .payper-use-content {
    // border-bottom: 2px solid;
    line-height: 6vh;
    font-size: 16px;
  }
  .products-services {
    white-space: nowrap;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    cursor: pointer;
    margin-right: 40px;
    line-height: 6vh;
  }
  .contact-us {
    white-space: nowrap;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    cursor: pointer;
    margin-right: 40px;
    line-height: 6vh;
  }
  .nav-footer {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
  .language {
    margin-right: 40px;
    display: flex;
    cursor: pointer;
    white-space: nowrap;
  }
  .icon-cart {
    margin-right: 20px;
    cursor: pointer;
  }
  .icon-user {
    margin-right: 20px;
    cursor: pointer;
  }
  .user {
    white-space: nowrap;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 16px;
    cursor: pointer;
  }

  .nav-toggle-btn {
    visibility: hidden;
    width: 0px;
    height: 0vh;
  }
  @media (max-width: 1200px) {
    .nav-toggle-btn {
      visibility: unset;
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      background: ${theme.COLORS.BLUE_MAIN};
    }
    .nav-area {
      padding-top: 5vh;
      padding-left: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      // height: 100%;
      width: 0px;
      line-height: 30px;
      transform: translate3d(-180vw, 0, 0);
      transition: transform 0.4s ease;
    }
    .nav-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 150px;
    }
    .nav-footer {
      display: flex;
      margin-left: 33px;
      flex-direction: column;
      align-items: flex-start;
    }
    .active-nav {
      transform: translate3d(-5vw, 0, 0);
    }
    .active-nav-width {
      width: 250px;
      height: 100vh;
    }
  }
`;
