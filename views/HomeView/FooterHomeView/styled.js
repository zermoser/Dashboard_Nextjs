import styled from "styled-components";
import { theme } from "../../../theme";

export const FooterTestStructureStyle = styled.div`
  .contact-us-footer {
    // width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 8vh;
  }
  .container-content {
    width: 20vw;
    color: ${theme.COLORS.BLUE_MAIN};
    display: flex;
    justify-content: center;
  }
  .title-content-footer {
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 18px;
    font-weight: 700;
  }
  .content-footer {
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: 22px;
    font-size: 16px;
  }
  .tel-footer {
    display: flex;
    padding-bottom: 18px;
    font-weight: 600;
  }
  .icon-footer {
    padding-right: 18px;
  }
  .telephone-number {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  .email-footer {
    font-weight: 600;
    display: flex;
    padding-bottom: 18px;
  }
  .email-address {
    display: flex;
    flex-direction: column;
  }
  .facebook-footer {
    font-weight: 600;
    display: flex;
  }
  .facebook-address {
    display: flex;
    flex-direction: column;
  }
  .company-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    margin-bottom: 20px;
  }
  .policy {
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 16px;
    color: ${theme.COLORS.BLUE_2};
    padding-right: 1vw;
  }
  .company {
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 14px;
    color: ${theme.COLORS.BLUE_2};
  }
  @media (min-width: 2100px) {
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 60vw;
    }
  }
  @media (max-width: 1200px) {
    .row {
      flex-wrap: nowrap;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 30px;
      // justify-content: center;
    }
    .container-content {
      padding-top: 20px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .company-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .company {
      text-align: center;
      width: 275px;
    }
  }
`;
