import styled from "styled-components";
import { theme } from "../../theme";

export const LayoutCardTab = styled.div`
  background: ${theme.COLORS.WHITE_1};
  margin: 0px 20px;
  border-radius: 10px;
`;

export const TitlePadding = styled.div`
  padding: 18px 0px;
`;

export const LayoutScreen = styled.div`
  background: ${theme.COLORS.GREY_1};
  height: 100%;
  width: 100%;
  padding: 1em 1em;
  padding-bottom: 5em;

  @media only screen and (max-width: 1200px) {
    padding: 2em 0.1em 2em 0.1em;
  }  
`;
