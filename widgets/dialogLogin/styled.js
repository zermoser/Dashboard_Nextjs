import styled from "styled-components";
import { theme } from "../../theme";

export const DialogStyle = styled.div`
  .title-dialog {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin-top: 6vh;
    color: ${theme.COLORS.BLUE_MAIN};
    white-space: nowrap;

  }
  .sub-title {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #a4a4a4;
    white-space: nowrap;

  }
  .container-from {
    margin-top: 5vh;
  }
  .label-username {
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #282828;
  }
  .input-username {
    margin-top: 8px;
  }
  .label-password {
    margin-top: 30px;
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #282828;
  }
  .input-password {
    margin-top: 8px;
  }
  .remember-me {
    white-space: nowrap;

  }
  .grid-remember {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .forget-password {
    margin-top: 10px;
    white-space: nowrap;

  }
  .btn-position {
    white-space: nowrap;

    margin-top: 30px;
  }
  // Button {
  //   width: 80%;
  //   background: ${theme.COLORS.BLUE_MAIN};
  //   border-radius: 8px;
  //   margin-top: 30px;
  // }
  .container-register {
    margin-bottom: 6vh;
    width: 100%;
    margin-top: 6vh;
    display: flex;
    justify-content: center;
  }
  .label-register {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #282828;
    white-space: nowrap;
  }
  .button-register {
    padding-left: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #5589bb;
    cursor: pointer;
    white-space: nowrap;

  }
`;
