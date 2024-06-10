import styled from "styled-components";
import { theme } from "../../theme";

export const NavBarHeader = styled.div`
  color: ${theme.COLORS.BLACK_1};
  position: fixed;
  z-index: 1000;
  width: 100%;

  .space-area {
    background-color: ${theme.COLORS.WHITE_1};
    height: 7vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 16px;
    padding-top: 1vh;
  }
  .nav-header {
    margin-left: 12vw;
    display: flex;
    align-items: center;
  }
  .icon-bar {
    margin-right: 5vw;
    cursor: pointer;
  }
  .home-page {
    white-space: nowrap;
    margin-right: 3vw;
    cursor: pointer;
    color: ${theme.COLORS.GREY_4};
  }
  .about-me {
    white-space: nowrap;
    margin-right: 3vw;
    cursor: pointer;
    color: ${theme.COLORS.GREY_4};
  }
  .why-me {
    white-space: nowrap;
    margin-right: 3vw;
    cursor: pointer;
    color: ${theme.COLORS.GREY_4};
  }
  .products-services {
    white-space: nowrap;
    margin-right: 3vw;
    cursor: pointer;
    color: ${theme.COLORS.GREY_4};
  }
  .contact-us {
    white-space: nowrap;
    margin-right: 3vw;
    cursor: pointer;
    color: ${theme.COLORS.GREY_4};
  }
  .active,
  li:hover {
    color: ${theme.COLORS.BLUE_MAIN};
  }
  .nav-footer {
    display: flex;
    margin-right: 12vw;
    align-items: center;
  }
  .icon-language {
    white-space: nowrap;
    margin-right: 30px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .register {
    white-space: nowrap;
    margin-right: 14px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    cursor: pointer;
  }
  .vertical-line {
    height: 3vh;
    border-left: 2px solid black;
  }
  .login {
    white-space: nowrap;
    margin-left: 14px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    cursor: pointer;
  }
  li {
    list-style-type: none;
  }
  .nav-toggle-btn {
    visibility: hidden;
    width: 0px;
    height: 0vh;
  }
  @media (max-width: 1200px) {
    .nav-toggle-btn {
      color: ${theme.COLORS.WHITE_1};
      visibility: unset;
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      background: ${theme.COLORS.BLUE_MAIN};
    }
    .space-area {
      margin-top: 0px;
      padding-top: 5vh;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;
      width: 0px;
      line-height: 30px;
      transform: translate3d(-180vw, 0, 0);
      transition: transform 0.4s ease;
    }
    .nav-header {
      margin-left: 65px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      // width: 150px;
    }
    .nav-footer {
      display: flex;
      margin-left: 65px;
      flex-direction: column;
      align-items: flex-start;
    }
    .active-nav {
      transform: translate3d(-5vw, 0, 0);
    }
    .vertical-line {
      height: 0vh;
      border-left: 0px;
    }
    .login {
      margin-left: 0px;
    }
    .active-nav-width {
      width: 300px;
      height: 100vh;
    }
  }
`;
