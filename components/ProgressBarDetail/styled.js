import styled from "styled-components";
import { theme } from "../../theme";

export const ProgressCard = styled.div`
  padding: 0em 3em 0em 3em;
  width: 100%;

  @media only screen and (max-width: 680px) {
    padding: 0em 2em 0em 2em;
    }
`;

export const TitlePadding = styled.div`
  padding: 10px 0px 10px 0px;
`;

export const TitlePadding2 = styled.div`
  padding: 10px 0px 0px 0px;
`;

export const ProgressTextStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressSpaceText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextColor = styled.div`
  color: ${theme.COLORS.BLUE_MAIN};
`;