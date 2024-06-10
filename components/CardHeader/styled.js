import styled from "styled-components";
import { theme } from "../../theme";

export const Card = styled.div`
  background: ${theme.COLORS.WHITE_1};
  color: ${theme.COLORS.BLUE_MAIN};
  width: ${({ width }) => width};
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em 2em 1em 0em;
  border-radius: 10px;

  @media only screen and (max-width: 580px) {
    
    grid-template-columns: 1fr 1fr ;
  }

  @media only screen and (max-width: 600px) {
    /* justify-content: space-around; */
    width: 100%;
    margin: 0px;

  
  }

  
  .card-lift {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .line {
    width: 1px;
    height: 80px;
    background-color: ${theme.COLORS.BLUE_MAIN};
  }

  .card-center {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-right-title {
    margin-bottom: 10px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 20px;
  }
  .itemList {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }
  .card-list {
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  }
  .titleonline {
    color: ${({ colorOnline }) => colorOnline};
  }
  .titleoffline {
    color: ${({ colorOffline }) => colorOffline};
  }
`;
export const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: ${({ color }) => color};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
`;


