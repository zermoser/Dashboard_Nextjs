import styled from "styled-components";
import { theme } from "../../theme";

export const SearchBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;

  .SearchInput {
    width: 310px;
    background-color: ${theme.COLORS.WHITE_1};

    color: ${theme.COLORS.TEXTSEARCH};

    color: ${theme.COLORS.BLACK_1};

    border: 0px;
    border-radius: 5px;
    font-size: 16px;
    padding: 8px;
  }
  input:focus {
    outline: none;
  }
`;
