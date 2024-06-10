import styled from "styled-components";
import { theme } from "../../../theme";

export const ItemList = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin: 5px;
`;

export const ItemListMini = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 3em;
`;

export const StyleText1 = styled.div`
  width: 50%;
  font-weight: 500;
  color: ${theme.COLORS.BLUE_MAIN};
`;

export const StyleText2 = styled.div`
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.BLUE_MAIN};
`;

export const StyleText3 = styled.div`
  color: ${theme.COLORS.BLUE_1};
`;

export const TitlePadding = styled.div`
  padding: 25px 0px;
`;

export const AddMediaHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 1280px) {
    justify-content: space-around;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100em;
    width: 80%;
  }
`;

export const AddMediaCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1280px) {
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LayoutCard = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const LayoutPageInfraUsage = styled.div`
  background: ${theme.COLORS.GREY_2};
  padding: 0px 20px;
`;

export const MiniCard = styled.div`
  background-color: ${theme.COLORS.WHITE_1};
  height: 148px;
  width: 100%;
  display: flex;
  margin-top: 3em;
  border-radius: 10px;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.COLORS.WHITE_1};
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 110px;
  background-color: ${theme.COLORS.BLUE_MAIN};
  opacity: 30%;

  @media only screen and (max-width: 767px) {
    height: 0px;
    width: 0px;
  }
`;

export const Card = styled.div`
  background: ${theme.COLORS.WHITE_1};
  height: 100%;
  width: 50%;
  height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  border-radius: 10px;

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    height: 20em;
  }
`;
