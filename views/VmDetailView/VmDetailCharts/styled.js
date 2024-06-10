import styled from "styled-components";
import { theme } from "../../../theme";

export const ChartSize = styled.div`
  width: 90%;
`;

export const GridCard = styled.div`
  padding-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const StyleText = styled.div`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 22px;
  color: ${theme.COLORS.BLUE_MAIN};
`;

export const TitlePadding = styled.div`
  padding: 25px 0px;
`;

export const TitlePadding2 = styled.div`
  padding: 12px 0px;
`;

export const LayoutPageInfraUsage = styled.div`
  background: ${theme.COLORS.WHITE_1};
  border-radius: 10px;

  .layoutCard {
    display: flex;
    align-items: center;
  }

  .layoutCardPaper {
    padding: 1em 2em;

    @media only screen and (max-width: 680px) {
      padding: 1em 0.5em;
    }
  }
`;

export const CardChart = styled.div`
  background: ${theme.COLORS.WHITE_1};
  height: 300px;
  grid-template-columns: 1fr 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${theme.COLORS.GREY_3};
  
  .ProgressCard {
    width: 100% ;
  }

`;

export const SearchCard = styled.div`
  height: 100%;
  display: flex;

  @media only screen and (max-width: 680px) {
    margin-bottom: 1em;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TableEdit = styled.div`
  @media only screen and (max-width: 680px) {
    overflow-x: scroll;
  }
`;

export const SearchOutline = styled.div`
  border: 1px solid ${theme.COLORS.GREY_4};
  border-radius: 5px;

  @media only screen and (max-width: 680px) {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 680px) {
    width: 80%;
  }
`;

export const StatusHistoryBox = styled.div`
  width: 180px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 680px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TableSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
  }
`;
