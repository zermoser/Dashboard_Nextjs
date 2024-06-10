import styled from "styled-components";
import { theme } from "../../theme";

export const LayoutPage = styled.div`
  background: ${theme.COLORS.GREY_2};
  height: 100%;
  width: 100%;
  padding: 20px 30px 50px 30px;
  
  .title-vm {
    color: ${theme.COLORS.BLUE_MAIN};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-top: 20px;
    margin-block-end: 25px;
  }

  @media screen and (max-width: 1280px) {
    background: ${theme.COLORS.GREY_2};
    height: 150%;
    width: 150%
  }
  @media screen and (max-width: 860px) {
    background: ${theme.COLORS.GREY_2};
    height: 180%;
    width: 180%;
  }

  @media screen and (max-width: 690px) {
    background: ${theme.COLORS.GREY_2};
    height: 200%;
    width: 200%;
  }
`;
