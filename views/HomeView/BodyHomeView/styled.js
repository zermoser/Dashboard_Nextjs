import styled from "styled-components";
import { theme } from "../../../theme";

export const ContentHeader = styled.div`
  color: black;
  .container {
    // width: 100vw;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
  }
  .container-content {
    padding-left: 20%;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .container-image {
    padding-left: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .content {
    height: 60%;
    align-items: flex-start;
  }
  .content-image {
    height: 80%;
    align-items: flex-start;
  }
  .header-content {
    font-size: 50px;
    font-weight: bold;
    color: ${theme.COLORS.BLUE_MAIN};
    line-height: 56px;
  }
  .desc-content {
    padding-right: 5vw;
    font-size: 16px;
    color: ${theme.COLORS.BLUE_MAIN};
    line-height: 30px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  }
  Button {
    margin-top: 50px;
    border-radius: 8px;
    height: 48px;
    width: 172px;
    background: ${theme.COLORS.BLUE_MAIN};
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      width: 100vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .container-content {
      padding-left: 0%;
    }
    .content-image {
      padding-top: 40px;
    }
    Button {
      margin-top: 0px;
    }
  }
  @media (max-width: 615px) {
    .container-content {
      padding-left: 20%;
    }
  }
`;
