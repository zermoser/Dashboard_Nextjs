import styled from "styled-components";
import { theme } from "../../../theme/index";

export const Card = styled.div`
background-color: ${theme.COLORS.WHITE_1}; 
padding: 25px;
border-radius: 10px;

`;

export const TableCard = styled.div`
  @media only screen and (max-width: 1086px) {
    overflow-x: scroll;
  }
`;

